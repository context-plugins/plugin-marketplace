import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Policy = {
  id: string;
  name: string;
  description: string | null;
  enabled: boolean;
  activeVersion: number | null;
  activeVersionId: string | null;
  versions: number;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policySchema: Schema<Policy> = s.object<Policy>(
  {
    id: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    enabled: s.boolean(),
    activeVersion: s.nullable(s.float64()),
    activeVersionId: s.nullable(s.string()),
    versions: s.float64(),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
