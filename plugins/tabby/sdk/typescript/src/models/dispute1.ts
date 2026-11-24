import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";

export type Dispute1 = {
  dispute: Dispute;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dispute1Schema: Schema<Dispute1> = s.object<Dispute1>(
  {
    dispute: disputeSchema,
  },
  { additionalProperties: s.json() },
);
