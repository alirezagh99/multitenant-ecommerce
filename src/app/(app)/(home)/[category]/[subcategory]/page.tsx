interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}
export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await params;
  return (
    <div>
      Category: {category}
      Subcategory: {subcategory}
    </div>
  );
}
