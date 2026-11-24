import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteAttributeResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteAttributeResponseSchema: Schema<PublicApiDeleteAttributeResponse> =
  s.object<PublicApiDeleteAttributeResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
