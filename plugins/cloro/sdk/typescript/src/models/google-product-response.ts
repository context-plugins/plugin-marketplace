import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result8InternalSchema, result8Schema, type Result8 } from "./result8.js";

export type GoogleProductResponse = {
  success: boolean;
  result: Result8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleProductResponseProperties: s.Shape<GoogleProductResponse> = {
  success: s.boolean(),
  result: result8InternalSchema,
};

export const googleProductResponseInternalSchema: Schema<GoogleProductResponse> =
  s.object<GoogleProductResponse>(googleProductResponseProperties, { additionalProperties: s.json() });

export const googleProductResponseSchema: Schema<GoogleProductResponse> = s.lazySchema(() =>
  s.object<GoogleProductResponse>(
    {
      ...googleProductResponseProperties,
      result: result8Schema,
    },
    { additionalProperties: s.json() },
  ),
);
