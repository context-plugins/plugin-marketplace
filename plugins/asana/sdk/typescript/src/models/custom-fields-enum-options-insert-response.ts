import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumOptionSchema, type EnumOption } from "./enum-option.js";

export type CustomFieldsEnumOptionsInsertResponse = {
  data?: EnumOption;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldsEnumOptionsInsertResponseSchema: Schema<CustomFieldsEnumOptionsInsertResponse> =
  s.object<CustomFieldsEnumOptionsInsertResponse>(
    {
      data: s.optional(s.lazy(() => enumOptionSchema)),
    },
    { additionalProperties: s.json() },
  );
