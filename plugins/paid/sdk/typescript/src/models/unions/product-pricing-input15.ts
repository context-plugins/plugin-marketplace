import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { productPricingInputSchema, type ProductPricingInput } from "../product-pricing-input.js";
import { productPricingInput1Schema, type ProductPricingInput1 } from "../product-pricing-input1.js";
import { productPricingInput10Schema, type ProductPricingInput10 } from "../product-pricing-input10.js";
import { productPricingInput11Schema, type ProductPricingInput11 } from "../product-pricing-input11.js";
import { productPricingInput12Schema, type ProductPricingInput12 } from "../product-pricing-input12.js";
import { productPricingInput13Schema, type ProductPricingInput13 } from "../product-pricing-input13.js";
import { productPricingInput14Schema, type ProductPricingInput14 } from "../product-pricing-input14.js";
import { productPricingInput2Schema, type ProductPricingInput2 } from "../product-pricing-input2.js";
import { productPricingInput3Schema, type ProductPricingInput3 } from "../product-pricing-input3.js";
import { productPricingInput4Schema, type ProductPricingInput4 } from "../product-pricing-input4.js";
import { productPricingInput5Schema, type ProductPricingInput5 } from "../product-pricing-input5.js";
import { productPricingInput6Schema, type ProductPricingInput6 } from "../product-pricing-input6.js";
import { productPricingInput7Schema, type ProductPricingInput7 } from "../product-pricing-input7.js";
import { productPricingInput8Schema, type ProductPricingInput8 } from "../product-pricing-input8.js";
import { productPricingInput9Schema, type ProductPricingInput9 } from "../product-pricing-input9.js";

export type ProductPricingInput15 =
  | ProductPricingInput
  | ProductPricingInput1
  | ProductPricingInput2
  | ProductPricingInput3
  | ProductPricingInput4
  | ProductPricingInput5
  | ProductPricingInput6
  | ProductPricingInput7
  | ProductPricingInput8
  | ProductPricingInput9
  | ProductPricingInput10
  | ProductPricingInput11
  | ProductPricingInput12
  | ProductPricingInput13
  | ProductPricingInput14;

export const productPricingInput15Schema: Schema<ProductPricingInput15> = s.of<ProductPricingInput15>(
  s.union([
    s.lazy(() => productPricingInputSchema),
    s.lazy(() => productPricingInput1Schema),
    s.lazy(() => productPricingInput2Schema),
    s.lazy(() => productPricingInput3Schema),
    s.lazy(() => productPricingInput4Schema),
    s.lazy(() => productPricingInput5Schema),
    s.lazy(() => productPricingInput6Schema),
    s.lazy(() => productPricingInput7Schema),
    s.lazy(() => productPricingInput8Schema),
    s.lazy(() => productPricingInput9Schema),
    s.lazy(() => productPricingInput10Schema),
    s.lazy(() => productPricingInput11Schema),
    s.lazy(() => productPricingInput12Schema),
    s.lazy(() => productPricingInput13Schema),
    s.lazy(() => productPricingInput14Schema),
  ]),
);
