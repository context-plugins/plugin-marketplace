import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTypeSchema, type DataType } from "./data-type.js";

/** A user attribute definition used in audience segment rules. */
export type Attribute = {
  /** Unique identifier of the attribute. */
  uid?: string;
  /** Display name of the attribute. */
  name?: string;
  /** Machine-readable key used to reference this attribute in rules and SDKs. */
  key?: string;
  /** Data type of the attribute. */
  dataType?: DataType;
  /** ISO 8601 timestamp when the attribute was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attributeSchema: Schema<Attribute> = s.object<Attribute>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    key: s.optional(s.string()),
    dataType: s.optional(s.lazy(() => dataTypeSchema)),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      dataType: "data_type",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
