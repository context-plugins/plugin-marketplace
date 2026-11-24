import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RunId = string;

export const runIdSchema: Schema<RunId> = s.of<RunId>(s.union([s.string()]));
