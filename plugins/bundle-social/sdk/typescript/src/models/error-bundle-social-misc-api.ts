import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorBundleSocialMiscApi = {
  code: number;
  message: string;
  subcode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorBundleSocialMiscApiSchema: Schema<ErrorBundleSocialMiscApi> =
  s.object<ErrorBundleSocialMiscApi>(
    {
      code: s.float64(),
      message: s.string(),
      subcode: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
