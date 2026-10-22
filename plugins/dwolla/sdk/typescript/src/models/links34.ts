import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargeToSchema, type ChargeTo } from "./charge-to.js";

export type Links34 = {
  chargeTo?: ChargeTo;
};

export const links34Schema: Schema<Links34> = s.object<Links34>({
  chargeTo: s.optional(s.lazy(() => chargeToSchema)),
  _keysMap: {
    chargeTo: "charge-to",
  },
});
