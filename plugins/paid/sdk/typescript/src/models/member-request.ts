import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MemberRequest = {
  /** External customer IDs. */
  customerIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberRequestSchema: Schema<MemberRequest> = s.object<MemberRequest>(
  {
    customerIds: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
