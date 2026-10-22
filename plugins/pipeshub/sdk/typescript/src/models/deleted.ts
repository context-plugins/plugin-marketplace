import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Deleted = {
  agents: number;
  toolsets: number;
  tools: number;
  knowledge: number;
  edges: number;
};

export const deletedSchema: Schema<Deleted> = s.object<Deleted>({
  agents: s.int(),
  toolsets: s.int(),
  tools: s.int(),
  knowledge: s.int(),
  edges: s.int(),
});
