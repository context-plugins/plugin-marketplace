import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the team where the endpoint was created. */
export type TeamName = string;

export const teamNameSchema: Schema<TeamName> = s.of<TeamName>(s.union([s.string()]));
