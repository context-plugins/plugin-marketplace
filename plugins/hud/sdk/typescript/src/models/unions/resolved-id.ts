import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ResolvedId = string;

export const resolvedIdSchema: Schema<ResolvedId> = s.of<ResolvedId>(s.union([s.string()]));
