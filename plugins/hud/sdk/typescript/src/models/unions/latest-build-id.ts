import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LatestBuildId = string;

export const latestBuildIdSchema: Schema<LatestBuildId> = s.of<LatestBuildId>(s.union([s.string()]));
