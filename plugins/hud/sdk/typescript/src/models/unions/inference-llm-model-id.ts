import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type InferenceLlmModelId = string;

export const inferenceLlmModelIdSchema: Schema<InferenceLlmModelId> = s.of<InferenceLlmModelId>(
  s.union([s.string()]),
);
