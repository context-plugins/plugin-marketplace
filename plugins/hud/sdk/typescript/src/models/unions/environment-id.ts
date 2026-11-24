import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnvironmentId = string;

export const environmentIdSchema: Schema<EnvironmentId> = s.of<EnvironmentId>(s.union([s.string()]));
