import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CompletionTokenIds = number[];

export const completionTokenIdsInternalSchema: Schema<CompletionTokenIds> = s.of<CompletionTokenIds>(
  s.union([s.array(s.int())]),
);

export const completionTokenIdsSchema: Schema<CompletionTokenIds> = s.lazySchema(() =>
  s.of<CompletionTokenIds>(s.union([s.array(s.int()).check(s.maxLength(250000))])),
);
