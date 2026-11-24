import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TeamName = string;

export const teamNameSchema: Schema<TeamName> = s.of<TeamName>(s.union([s.string()]));
