import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./unions/reason1.js";

/** Details about why the response is incomplete. */
export type IncompleteDetails = {
  reason?: Reason1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incompleteDetailsSchema: Schema<IncompleteDetails> = s.object<IncompleteDetails>(
  {
    reason: s.optional(s.lazy(() => reason1Schema)),
  },
  { additionalProperties: s.json() },
);
