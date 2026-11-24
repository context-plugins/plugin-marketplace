import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundResource = {
  id: string | null;
  code: string | null;
  name: string;
  raised: number;
  supporters: number;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundResourceSchema: Schema<FundResource> = s.object<FundResource>(
  {
    id: s.nullable(s.string()),
    code: s.nullable(s.string()),
    name: s.string(),
    raised: s.float64(),
    supporters: s.int(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
