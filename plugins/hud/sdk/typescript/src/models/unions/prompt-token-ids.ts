import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PromptTokenIds = number[];

export const promptTokenIdsInternalSchema: Schema<PromptTokenIds> = s.of<PromptTokenIds>(
  s.union([s.array(s.int())]),
);

export const promptTokenIdsSchema: Schema<PromptTokenIds> = s.lazySchema(() =>
  s.of<PromptTokenIds>(s.union([s.array(s.int()).check(s.maxLength(250000))])),
);
