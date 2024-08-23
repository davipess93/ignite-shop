import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          cupiditate tenetur quos dolorem modi dolores incidunt nemo deserunt
          dolor, quia alias quas minus excepturi officiis, numquam quam
          accusamus possimus at!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
