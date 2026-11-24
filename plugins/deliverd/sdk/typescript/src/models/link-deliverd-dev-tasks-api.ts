import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinkDeliverdDevTasksApi = {
  sourceTaskId: string;
  targetTaskId: string;
  kind: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkDeliverdDevTasksApiSchema: Schema<LinkDeliverdDevTasksApi> =
  s.object<LinkDeliverdDevTasksApi>(
    {
      sourceTaskId: s.string(),
      targetTaskId: s.string(),
      kind: s.string(),
    },
    { additionalProperties: s.json() },
  );
