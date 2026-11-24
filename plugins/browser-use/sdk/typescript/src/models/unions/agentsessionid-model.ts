import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AgentsessionidModel = string;

export const agentsessionidModelSchema: Schema<AgentsessionidModel> = s.of<AgentsessionidModel>(
  s.union([s.string()]),
);
