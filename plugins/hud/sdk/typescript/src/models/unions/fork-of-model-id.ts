import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ForkOfModelId = string;

export const forkOfModelIdSchema: Schema<ForkOfModelId> = s.of<ForkOfModelId>(s.union([s.string()]));
