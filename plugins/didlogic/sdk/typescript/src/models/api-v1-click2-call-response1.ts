import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type ApiV1Click2CallResponse1 = {
  /** The Click2Call call resource */
  data: Data1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2CallResponse1Schema: Schema<ApiV1Click2CallResponse1> =
  s.object<ApiV1Click2CallResponse1>(
    {
      data: data1Schema,
    },
    { additionalProperties: s.json() },
  );
