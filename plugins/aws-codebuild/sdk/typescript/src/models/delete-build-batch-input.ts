import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBuildBatchInput = {
  /** The identifier of the batch build to delete. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBuildBatchInputSchema: Schema<DeleteBuildBatchInput> = s.object<DeleteBuildBatchInput>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
