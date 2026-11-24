import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Target = {
  aiSystemId: string;
  name: string;
  approvedClassification: string | null;
  personalData: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const targetSchema: Schema<Target> = s.object<Target>(
  {
    aiSystemId: s.string(),
    name: s.string(),
    approvedClassification: s.nullable(s.string()),
    personalData: s.boolean(),
  },
  { additionalProperties: s.json() },
);
