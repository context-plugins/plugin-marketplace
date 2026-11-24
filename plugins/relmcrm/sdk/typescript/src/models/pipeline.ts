import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  objectRelmCrmPipelinesApiSchema,
  type ObjectRelmCrmPipelinesApi,
} from "./object-relm-crm-pipelines-api.js";
import { stageSchema, type Stage } from "./stage.js";

export type Pipeline = {
  id?: string;
  object?: ObjectRelmCrmPipelinesApi;
  key?: string;
  name?: string;
  isDefault?: boolean;
  stages?: Stage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineSchema: Schema<Pipeline> = s.object<Pipeline>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => objectRelmCrmPipelinesApiSchema)),
    key: s.optional(s.string()),
    name: s.optional(s.string()),
    isDefault: s.optional(s.boolean()),
    stages: s.optional(s.array(s.lazy(() => stageSchema))),
    _keysMap: {
      isDefault: "is_default",
    },
  },
  { additionalProperties: s.json() },
);
