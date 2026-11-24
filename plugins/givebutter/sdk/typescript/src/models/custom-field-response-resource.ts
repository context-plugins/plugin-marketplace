import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomFieldResponseResource = {
  id: number;
  fieldId: number;
  title: string;
  description: string | null;
  type: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldResponseResourceSchema: Schema<CustomFieldResponseResource> =
  s.object<CustomFieldResponseResource>(
    {
      id: s.int(),
      fieldId: s.int(),
      title: s.string(),
      description: s.nullable(s.string()),
      type: s.string(),
      value: s.string(),
      createdAt: s.string(),
      updatedAt: s.string(),
      _keysMap: {
        fieldId: "field_id",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
