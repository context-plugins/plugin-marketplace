import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldResponseSchema, type CustomFieldResponse } from "./custom-field-response.js";

export type CustomFieldsResponse = {
  data?: CustomFieldResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldsResponseSchema: Schema<CustomFieldsResponse> = s.object<CustomFieldsResponse>(
  {
    data: s.optional(s.lazy(() => customFieldResponseSchema)),
  },
  { additionalProperties: s.json() },
);
