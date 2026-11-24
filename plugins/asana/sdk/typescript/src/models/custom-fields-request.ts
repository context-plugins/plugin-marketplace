import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldRequestSchema, type CustomFieldRequest } from "./custom-field-request.js";

export type CustomFieldsRequest = {
  data?: CustomFieldRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldsRequestSchema: Schema<CustomFieldsRequest> = s.object<CustomFieldsRequest>(
  {
    data: s.optional(s.lazy(() => customFieldRequestSchema)),
  },
  { additionalProperties: s.json() },
);
