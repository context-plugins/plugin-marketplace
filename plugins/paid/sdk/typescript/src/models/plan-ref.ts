import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanRef = {
  id: string;
  name: string | null;
  externalId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planRefSchema: Schema<PlanRef> = s.object<PlanRef>(
  {
    id: s.string(),
    name: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
