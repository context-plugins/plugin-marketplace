import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1ApisApikeysRequest = {
  /** A description of the purpose of the API key. */
  description?: string;
  /**
   * From the creation time, the time after which the API key expires. The date is represented as
   * seconds since the epoch, rounded down to the nearest hour. The default value for this parameter
   * is 7 days from creation time. For more information, see .
   */
  expires?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1ApisApikeysRequestSchema: Schema<V1ApisApikeysRequest> = s.object<V1ApisApikeysRequest>(
  {
    description: s.optional(s.string()),
    expires: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
