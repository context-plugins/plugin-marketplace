import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PipelinesStagesReorderRequest = {
  order: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelinesStagesReorderRequestSchema: Schema<PipelinesStagesReorderRequest> =
  s.object<PipelinesStagesReorderRequest>(
    {
      order: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
