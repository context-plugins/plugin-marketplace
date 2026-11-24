import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type CustomCategoriesResponse = {
  data: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customCategoriesResponseSchema: Schema<CustomCategoriesResponse> =
  s.object<CustomCategoriesResponse>(
    {
      data: dataSchema,
    },
    { additionalProperties: s.json() },
  );
