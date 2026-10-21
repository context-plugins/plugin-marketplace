import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination4Schema, type Destination4 } from "./destination4.js";
import { massPayment1Schema, type MassPayment1 } from "./mass-payment1.js";
import { selfSchema, type Self } from "./self.js";
import { transfer1Schema, type Transfer1 } from "./transfer1.js";

export type Links10 = {
  self?: Self;
  massPayment?: MassPayment1;
  destination?: Destination4;
  transfer?: Transfer1;
};

export const links10Schema: Schema<Links10> = s.object<Links10>({
  self: s.optional(s.lazy(() => selfSchema)),
  massPayment: s.optional(s.lazy(() => massPayment1Schema)),
  destination: s.optional(s.lazy(() => destination4Schema)),
  transfer: s.optional(s.lazy(() => transfer1Schema)),
  _keysMap: {
    massPayment: "mass-payment",
  },
});
