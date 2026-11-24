import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status2Schema, type Status2 } from "./status2.js";

export type AccessControlRequest400Error1 = {
  /** Response Status */
  status?: Status2;
  /** Array of messages */
  messages?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessControlRequest400Error1Schema: Schema<AccessControlRequest400Error1> =
  s.object<AccessControlRequest400Error1>(
    {
      status: s.optional(s.lazy(() => status2Schema)),
      messages: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
