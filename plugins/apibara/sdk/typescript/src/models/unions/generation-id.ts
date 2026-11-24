import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GenerationId = number | number[];

export const generationIdInternalSchema: Schema<GenerationId> = s.of<GenerationId>(
  s.union([s.int(), s.array(s.int())]),
);

export const generationIdSchema: Schema<GenerationId> = s.lazySchema(() =>
  s.of<GenerationId>(s.union([s.int().check(s.gte(1)), s.array(s.int().check(s.gte(1)))])),
);
