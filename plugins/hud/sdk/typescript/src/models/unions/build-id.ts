import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BuildId = string;

export const buildIdSchema: Schema<BuildId> = s.of<BuildId>(s.union([s.string()]));
