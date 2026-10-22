import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of team to run requests as (optional parameter). */
export type XFriendliTeam = string;

export const xFriendliTeamSchema: Schema<XFriendliTeam> = s.of<XFriendliTeam>(s.union([s.string()]));
