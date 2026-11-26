import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Agent = {
  name?: string;
  model?: string;
};

const agentProperties: s.Shape<Agent> = {
  name: s.optional(s.string()),
  model: s.optional(s.string()),
};

export const agentInternalSchema: Schema<Agent> = s.object<Agent>(agentProperties);

export const agentSchema: Schema<Agent> = s.lazySchema(() =>
  s.object<Agent>({
    ...agentProperties,
    name: s.optional(s.string().check(s.maxLength(128))),
    model: s.optional(s.string().check(s.maxLength(128))),
  }),
);
