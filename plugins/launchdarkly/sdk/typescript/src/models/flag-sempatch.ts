import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagSempatch = {
  instructions: Record<string, unknown>[];
  comment?: string;
};

export const flagSempatchSchema: Schema<FlagSempatch> = s.object<FlagSempatch>({
  instructions: s.array(s.record(s.string(), s.unknown())),
  comment: s.optional(s.string()),
});
