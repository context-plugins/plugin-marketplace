import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stageSchema, type Stage } from "./stage.js";

export type Pipeline = {
  id: string;
  label: string;
  stages: Stage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineSchema: Schema<Pipeline> = s.object<Pipeline>(
  {
    id: s.string(),
    label: s.string(),
    stages: s.array(s.lazy(() => stageSchema)),
  },
  { additionalProperties: s.json() },
);
