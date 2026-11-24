import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTypeSchema, type DataType } from "./data-type.js";

/** Parameters for creating or updating an attribute. */
export type CreateAttributeRequest = {
  /** Display name for the attribute. */
  name: string;
  /** Machine-readable key for the attribute. */
  key: string;
  /** Data type of the attribute. */
  dataType: DataType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAttributeRequestSchema: Schema<CreateAttributeRequest> = s.object<CreateAttributeRequest>(
  {
    name: s.string(),
    key: s.string(),
    dataType: dataTypeSchema,
    _keysMap: {
      dataType: "data_type",
    },
  },
  { additionalProperties: s.json() },
);
