import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type Extra = {
  reason?: Reason1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extraSchema: Schema<Extra> = s.object<Extra>(
  {
    reason: s.optional(s.lazy(() => reason1Schema)),
  },
  { additionalProperties: s.json() },
);
