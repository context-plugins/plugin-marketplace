import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An external identifier that can be used to match the payment method against your own records. */
export type ExternalIdentifier26 = string;

export const externalIdentifier26Schema: Schema<ExternalIdentifier26> = s.of<ExternalIdentifier26>(
  s.union([s.string()]),
);
