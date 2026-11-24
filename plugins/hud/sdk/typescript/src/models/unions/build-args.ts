import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BuildArgs = Record<string, string>;

export const buildArgsSchema: Schema<BuildArgs> = s.of<BuildArgs>(
  s.union([s.record(s.string(), s.string())]),
);
