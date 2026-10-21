import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentPropertiesSchema, type AgentProperties } from "../agent-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy3 = AgentProperties;

export const orderBy3Schema: Schema<OrderBy3> = s.of<OrderBy3>(
  s.union([s.lazy(() => agentPropertiesSchema)]),
);
