import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExternalIdResource = {
  id: number;
  label: string;
  externalId: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalIdResourceSchema: Schema<ExternalIdResource> = s.object<ExternalIdResource>(
  {
    id: s.int(),
    label: s.string(),
    externalId: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      externalId: "external_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
