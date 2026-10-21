import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier of the payment method to filter by. */
export type ExternalIdentifier14 = string;

export const externalIdentifier14Schema: Schema<ExternalIdentifier14> = s.of<ExternalIdentifier14>(
  s.union([s.string()]),
);
