import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumOptionInsertRequestSchema, type EnumOptionInsertRequest } from "./enum-option-insert-request.js";

export type CustomFieldsEnumOptionsInsertRequest = {
  data?: EnumOptionInsertRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldsEnumOptionsInsertRequestSchema: Schema<CustomFieldsEnumOptionsInsertRequest> =
  s.object<CustomFieldsEnumOptionsInsertRequest>(
    {
      data: s.optional(s.lazy(() => enumOptionInsertRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
