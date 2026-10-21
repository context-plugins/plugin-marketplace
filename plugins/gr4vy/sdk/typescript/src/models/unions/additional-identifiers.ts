import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AdditionalIdentifiers = string;

export const additionalIdentifiersSchema: Schema<AdditionalIdentifiers> = s.of<AdditionalIdentifiers>(
  s.union([s.string()]),
);
