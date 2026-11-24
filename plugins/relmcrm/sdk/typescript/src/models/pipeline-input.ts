import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stage1Schema, type Stage1 } from "./stage1.js";

export type PipelineInput = {
  key?: string;
  name?: string;
  isDefault?: boolean;
  stages?: Stage1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineInputSchema: Schema<PipelineInput> = s.object<PipelineInput>(
  {
    key: s.optional(s.string()),
    name: s.optional(s.string()),
    isDefault: s.optional(s.boolean()),
    stages: s.optional(s.array(s.lazy(() => stage1Schema))),
    _keysMap: {
      isDefault: "is_default",
    },
  },
  { additionalProperties: s.json() },
);
