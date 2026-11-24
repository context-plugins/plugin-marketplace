import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result8InternalSchema, result8Schema, type Result8 } from "./result8.js";

export type GoogleProductResponse2 = {
  success: boolean;
  result: Result8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleProductResponse2Properties: s.Shape<GoogleProductResponse2> = {
  success: s.boolean(),
  result: result8InternalSchema,
};

export const googleProductResponse2InternalSchema: Schema<GoogleProductResponse2> =
  s.object<GoogleProductResponse2>(googleProductResponse2Properties, { additionalProperties: s.json() });

export const googleProductResponse2Schema: Schema<GoogleProductResponse2> = s.lazySchema(() =>
  s.object<GoogleProductResponse2>(
    {
      ...googleProductResponse2Properties,
      result: result8Schema,
    },
    { additionalProperties: s.json() },
  ),
);
