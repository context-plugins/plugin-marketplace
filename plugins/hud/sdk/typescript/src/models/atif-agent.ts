import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { modelNameSchema, type ModelName } from "./unions/model-name.js";
import {
  toolDefinitionsInternalSchema,
  toolDefinitionsSchema,
  type ToolDefinitions,
} from "./unions/tool-definitions.js";

export type AtifAgent = {
  name: string;
  version: string;
  modelName?: ModelName;
  toolDefinitions?: ToolDefinitions;
  extra?: Extra;
};

const atifAgentProperties: s.Shape<AtifAgent> = {
  name: s.string(),
  version: s.string(),
  modelName: s.optional(s.lazy(() => modelNameSchema)),
  toolDefinitions: s.optional(s.lazy(() => toolDefinitionsInternalSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  _keysMap: {
    modelName: "model_name",
    toolDefinitions: "tool_definitions",
  },
};

export const atifAgentInternalSchema: Schema<AtifAgent> = s.object<AtifAgent>(atifAgentProperties);

export const atifAgentSchema: Schema<AtifAgent> = s.lazySchema(() =>
  s.object<AtifAgent>({
    ...atifAgentProperties,
    toolDefinitions: s.optional(s.lazy(() => toolDefinitionsSchema)),
  }),
);
