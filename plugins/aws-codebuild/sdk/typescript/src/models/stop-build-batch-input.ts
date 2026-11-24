import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopBuildBatchInput = {
  /** The identifier of the batch build to stop. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBuildBatchInputSchema: Schema<StopBuildBatchInput> = s.object<StopBuildBatchInput>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
