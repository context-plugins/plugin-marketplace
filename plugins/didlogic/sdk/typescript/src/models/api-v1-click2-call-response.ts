import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type ApiV1Click2CallResponse = {
  /** The Click2Call call resource */
  data: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2CallResponseSchema: Schema<ApiV1Click2CallResponse> =
  s.object<ApiV1Click2CallResponse>(
    {
      data: dataSchema,
    },
    { additionalProperties: s.json() },
  );
