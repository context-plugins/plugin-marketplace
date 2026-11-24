import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object containing references to the source of the error. */
export type SourceConnectAuthenticationApi = {
  /** String indicating which URI query parameter caused the error. */
  parameter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceConnectAuthenticationApiSchema: Schema<SourceConnectAuthenticationApi> =
  s.object<SourceConnectAuthenticationApi>(
    {
      parameter: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
