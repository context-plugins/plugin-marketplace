import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

/**
 * The feedback reason given when the anomaly was resolved. Present only when `reviewStatus` is
 * `RESOLVED` and a reason was given. The resolution comment is not included.
 */
export type ResolutionNote1 = {
  reason: Reason1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resolutionNote1Schema: Schema<ResolutionNote1> = s.object<ResolutionNote1>(
  {
    reason: reason1Schema,
  },
  { additionalProperties: s.json() },
);
