import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FolderStats = string | number;

export const folderStatsSchema: Schema<FolderStats> = s.of<FolderStats>(
  s.union([s.string(), s.int(), s.float64()]),
);
