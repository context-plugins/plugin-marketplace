import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentPropertiesSchema, type AgentProperties } from "../agent-properties.js";

/** The fields to include in the response */
export type Fields = AgentProperties[];

export const fieldsSchema: Schema<Fields> = s.of<Fields>(
  s.union([s.array(s.lazy(() => agentPropertiesSchema))]),
);
