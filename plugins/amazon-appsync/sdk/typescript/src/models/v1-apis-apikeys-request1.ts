import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ApisApikeysRequest1 = {
  /** A description of the purpose of the API key. */
  description?: string;
  /**
   * From the update time, the time after which the API key expires. The date is represented as
   * seconds since the epoch. For more information, see .
   */
  expires?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisApikeysRequest1Schema: Schema<V1ApisApikeysRequest1> = s.object<V1ApisApikeysRequest1>(
  {
    description: s.optional(s.string()),
    expires: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
