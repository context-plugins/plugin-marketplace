import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FailureReasonRep = {
  /** The attribute that failed validation */
  attribute: string;
  /** The reason the attribute failed validation */
  reason: string;
};

export const failureReasonRepSchema: Schema<FailureReasonRep> = s.object<FailureReasonRep>({
  attribute: s.string(),
  reason: s.string(),
});
