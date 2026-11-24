import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiKey = {
  /** The API key ID. */
  id?: string;
  /** A description of the purpose of the API key. */
  description?: string;
  /**
   * The time after which the API key expires. The date is represented as seconds since the epoch,
   * rounded down to the nearest hour.
   */
  expires?: number;
  /**
   * The time after which the API key is deleted. The date is represented as seconds since the
   * epoch, rounded down to the nearest hour.
   */
  deletes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeySchema: Schema<ApiKey> = s.object<ApiKey>(
  {
    id: s.optional(s.string()),
    description: s.optional(s.string()),
    expires: s.optional(s.int()),
    deletes: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
