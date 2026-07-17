import {
  ProductView,
  ProductViewSkeleton,
} from "@/modules/products/ui/views/product-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ slug: string; productId: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, productId } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.tenants.getOne.queryOptions({ slug }));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductViewSkeleton />}></Suspense>
      <ProductView productId={productId} tenantSlug={slug} />
    </HydrationBoundary>
  );
}
