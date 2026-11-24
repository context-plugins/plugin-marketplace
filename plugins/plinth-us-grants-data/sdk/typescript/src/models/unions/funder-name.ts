import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FunderName = string;

export const funderNameSchema: Schema<FunderName> = s.of<FunderName>(s.union([s.string()]));
