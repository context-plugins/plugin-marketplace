import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pricingInputSchema, type PricingInput } from "../pricing-input.js";
import { pricingInput1Schema, type PricingInput1 } from "../pricing-input1.js";
import { pricingInput10Schema, type PricingInput10 } from "../pricing-input10.js";
import { pricingInput11Schema, type PricingInput11 } from "../pricing-input11.js";
import { pricingInput12Schema, type PricingInput12 } from "../pricing-input12.js";
import { pricingInput13Schema, type PricingInput13 } from "../pricing-input13.js";
import { pricingInput14Schema, type PricingInput14 } from "../pricing-input14.js";
import { pricingInput2Schema, type PricingInput2 } from "../pricing-input2.js";
import { pricingInput3Schema, type PricingInput3 } from "../pricing-input3.js";
import { pricingInput4Schema, type PricingInput4 } from "../pricing-input4.js";
import { pricingInput5Schema, type PricingInput5 } from "../pricing-input5.js";
import { pricingInput6Schema, type PricingInput6 } from "../pricing-input6.js";
import { pricingInput7Schema, type PricingInput7 } from "../pricing-input7.js";
import { pricingInput8Schema, type PricingInput8 } from "../pricing-input8.js";
import { pricingInput9Schema, type PricingInput9 } from "../pricing-input9.js";

export type PricingInput15 =
  | PricingInput
  | PricingInput1
  | PricingInput2
  | PricingInput3
  | PricingInput4
  | PricingInput5
  | PricingInput6
  | PricingInput7
  | PricingInput8
  | PricingInput9
  | PricingInput10
  | PricingInput11
  | PricingInput12
  | PricingInput13
  | PricingInput14;

export const pricingInput15Schema: Schema<PricingInput15> = s.of<PricingInput15>(
  s.union([
    s.lazy(() => pricingInputSchema),
    s.lazy(() => pricingInput1Schema),
    s.lazy(() => pricingInput2Schema),
    s.lazy(() => pricingInput3Schema),
    s.lazy(() => pricingInput4Schema),
    s.lazy(() => pricingInput5Schema),
    s.lazy(() => pricingInput6Schema),
    s.lazy(() => pricingInput7Schema),
    s.lazy(() => pricingInput8Schema),
    s.lazy(() => pricingInput9Schema),
    s.lazy(() => pricingInput10Schema),
    s.lazy(() => pricingInput11Schema),
    s.lazy(() => pricingInput12Schema),
    s.lazy(() => pricingInput13Schema),
    s.lazy(() => pricingInput14Schema),
  ]),
);
