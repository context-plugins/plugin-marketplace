import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error2CloroDevCreditsApi = {
  code?: string;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2CloroDevCreditsApiSchema: Schema<Error2CloroDevCreditsApi> =
  s.object<Error2CloroDevCreditsApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
