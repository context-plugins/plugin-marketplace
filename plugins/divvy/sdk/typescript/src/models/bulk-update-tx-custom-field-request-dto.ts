import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { updateCustomFieldDtoSchema, type UpdateCustomFieldDto } from "./update-custom-field-dto.js";

/** Transaction Custom Fields update request dto. */
export type BulkUpdateTxCustomFieldRequestDto = {
  /** List of custom field and value updates */
  customFields: UpdateCustomFieldDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkUpdateTxCustomFieldRequestDtoProperties: s.Shape<BulkUpdateTxCustomFieldRequestDto> = {
  customFields: s.array(s.lazy(() => updateCustomFieldDtoSchema)),
};

export const bulkUpdateTxCustomFieldRequestDtoInternalSchema: Schema<BulkUpdateTxCustomFieldRequestDto> =
  s.object<BulkUpdateTxCustomFieldRequestDto>(bulkUpdateTxCustomFieldRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const bulkUpdateTxCustomFieldRequestDtoSchema: Schema<BulkUpdateTxCustomFieldRequestDto> =
  s.lazySchema(() =>
    s.object<BulkUpdateTxCustomFieldRequestDto>(
      {
        ...bulkUpdateTxCustomFieldRequestDtoProperties,
        customFields: s.array(s.lazy(() => updateCustomFieldDtoSchema)).check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
