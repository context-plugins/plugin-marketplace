import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { DataType, dataTypeSchema } from "./data-type.js";
import { objectRelmCrmBatchApiSchema, type ObjectRelmCrmBatchApi } from "./object-relm-crm-batch-api.js";

export type FieldsRequest = {
  object: ObjectRelmCrmBatchApi;
  key: string;
  label?: string;
  /** @default DataType.Text */
  dataType?: DataType;
  enumGroup?: string;
  required?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldsRequestSchema: Schema<FieldsRequest> = s.object<FieldsRequest>(
  {
    object: objectRelmCrmBatchApiSchema,
    key: s.string(),
    label: s.optional(s.string()),
    dataType: s.defaulted(dataTypeSchema, DataType.Text),
    enumGroup: s.optional(s.string()),
    required: s.optional(s.boolean()),
    _keysMap: {
      dataType: "data_type",
      enumGroup: "enum_group",
    },
  },
  { additionalProperties: s.json() },
);
