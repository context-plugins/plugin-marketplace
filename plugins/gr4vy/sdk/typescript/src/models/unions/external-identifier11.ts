import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant reference that can be used to match the payment method against your own records. */
export type ExternalIdentifier11 = string;

export const externalIdentifier11Schema: Schema<ExternalIdentifier11> = s.of<ExternalIdentifier11>(
  s.union([s.string()]),
);
