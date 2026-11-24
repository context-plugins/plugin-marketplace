import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";

export type CustomCategoriesUrlsRequest = {
  data?: Data2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customCategoriesUrlsRequestSchema: Schema<CustomCategoriesUrlsRequest> =
  s.object<CustomCategoriesUrlsRequest>(
    {
      data: s.optional(s.lazy(() => data2Schema)),
    },
    { additionalProperties: s.json() },
  );
