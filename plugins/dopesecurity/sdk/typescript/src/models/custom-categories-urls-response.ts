import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type CustomCategoriesUrlsResponse = {
  data: Data1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customCategoriesUrlsResponseSchema: Schema<CustomCategoriesUrlsResponse> =
  s.object<CustomCategoriesUrlsResponse>(
    {
      data: data1Schema,
    },
    { additionalProperties: s.json() },
  );
