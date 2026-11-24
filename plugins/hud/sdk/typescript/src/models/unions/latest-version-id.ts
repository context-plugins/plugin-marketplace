import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LatestVersionId = string;

export const latestVersionIdSchema: Schema<LatestVersionId> = s.of<LatestVersionId>(s.union([s.string()]));
