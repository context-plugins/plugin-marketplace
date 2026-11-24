import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2Keywords404Error = {
  /** @default 0 */
  errorCode?: number;
  errorMessage?: string;
  /** @default true */
  success?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2Keywords404ErrorSchema: Schema<ApiV2Keywords404Error> = s.object<ApiV2Keywords404Error>(
  {
    errorCode: s.defaulted(s.int(), 0),
    errorMessage: s.optional(s.string()),
    success: s.defaulted(s.boolean(), true),
    _keysMap: {
      errorCode: "error_code",
      errorMessage: "error_message",
    },
  },
  { additionalProperties: s.json() },
);
