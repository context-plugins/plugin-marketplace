import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A value that can be used to match the payout against your own records. */
export type ExternalIdentifier24 = string;

export const externalIdentifier24Schema: Schema<ExternalIdentifier24> = s.of<ExternalIdentifier24>(
  s.union([s.string()]),
);
