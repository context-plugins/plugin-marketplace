import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultRisk1Schema, type DefaultRisk1 } from "./default-risk1.js";
import { riskCategory1Schema, type RiskCategory1 } from "./risk-category1.js";
import { sourceSchema, type Source } from "./source.js";

export type Action = {
  id: string;
  actionId: string;
  name: string;
  description: string | null;
  inputSchema: Record<string, unknown>;
  editableFields: string[];
  displayTitle: string | null;
  riskCategory: RiskCategory1;
  defaultRisk: DefaultRisk1;
  source: Source;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionSchema: Schema<Action> = s.object<Action>(
  {
    id: s.string(),
    actionId: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    inputSchema: s.record(s.string(), s.unknown()),
    editableFields: s.array(s.string()),
    displayTitle: s.nullable(s.string()),
    riskCategory: riskCategory1Schema,
    defaultRisk: defaultRisk1Schema,
    source: sourceSchema,
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
