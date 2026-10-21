import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargeTo = {
  href?: string;
};

export const chargeToSchema: Schema<ChargeTo> = s.object<ChargeTo>({
  href: s.optional(s.string()),
});
