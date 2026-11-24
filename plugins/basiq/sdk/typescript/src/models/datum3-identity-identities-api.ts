import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum3IdentityIdentitiesApi = {
  /**
   * Application-specific error code, expressed as a string value.
   *
   * @default "internal-server-error"
   */
  code?: "internal-server-error";
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Title of the error */
  title?: string;
  /** Type of the response, always "error" */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum3IdentityIdentitiesApiSchema: Schema<Datum3IdentityIdentitiesApi> =
  s.object<Datum3IdentityIdentitiesApi>(
    {
      code: s.defaulted(s.literal("internal-server-error"), "internal-server-error"),
      detail: s.optional(s.string()),
      title: s.optional(s.string()),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
