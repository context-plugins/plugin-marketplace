import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnvironmentName = string;

export const environmentNameSchema: Schema<EnvironmentName> = s.of<EnvironmentName>(s.union([s.string()]));
