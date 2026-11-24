import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type KindVariantYqwpsz = string;

export const kindVariantYqwpszSchema: Schema<KindVariantYqwpsz> = s.of<KindVariantYqwpsz>(
  s.union([s.string()]),
);
