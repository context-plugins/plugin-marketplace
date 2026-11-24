import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldInfoSchema, type CustomFieldInfo } from "./custom-field-info.js";

export type CustomFieldResponse = {
  data?: CustomFieldInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldResponseSchema: Schema<CustomFieldResponse> = s.object<CustomFieldResponse>(
  {
    data: s.optional(s.lazy(() => customFieldInfoSchema)),
  },
  { additionalProperties: s.json() },
);
