import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1JwtdecoderRequest = {
  /** JWT token to decode */
  token: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JwtdecoderRequestSchema: Schema<V1JwtdecoderRequest> = s.object<V1JwtdecoderRequest>(
  {
    token: s.string(),
  },
  { additionalProperties: s.json() },
);
