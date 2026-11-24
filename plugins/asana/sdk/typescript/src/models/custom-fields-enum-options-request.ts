import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumOptionRequestSchema, type EnumOptionRequest } from "./enum-option-request.js";

export type CustomFieldsEnumOptionsRequest = {
  data?: EnumOptionRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldsEnumOptionsRequestSchema: Schema<CustomFieldsEnumOptionsRequest> =
  s.object<CustomFieldsEnumOptionsRequest>(
    {
      data: s.optional(s.lazy(() => enumOptionRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
