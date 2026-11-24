import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SourceBuildId = string;

export const sourceBuildIdSchema: Schema<SourceBuildId> = s.of<SourceBuildId>(s.union([s.string()]));
