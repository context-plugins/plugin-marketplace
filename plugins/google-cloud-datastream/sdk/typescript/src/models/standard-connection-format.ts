import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard connection format. */
export type StandardConnectionFormat = {
  /**
   * Optional. Deprecated: Use the `additional_options` map to specify the `directConnection`
   * parameter instead. For example: `additional_options = {"directConnection": "true"}`. Specifies
   * whether the client connects directly to the host[:port] in the connection URI.
   *
   * @deprecated
   */
  directConnection?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const standardConnectionFormatSchema: Schema<StandardConnectionFormat> =
  s.object<StandardConnectionFormat>(
    {
      directConnection: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
