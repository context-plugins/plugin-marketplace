import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error3CloroDevStatesApi = {
  code?: string;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error3CloroDevStatesApiSchema: Schema<Error3CloroDevStatesApi> =
  s.object<Error3CloroDevStatesApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
