import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamInfoDefinitionSchema, type TeamInfoDefinition } from "./team-info-definition.js";

/** Info about a team and optional version for that info */
export type IndexTeamRequest = {
  /** Information about an employee's team */
  team: TeamInfoDefinition;
  /** Version number for the team object. If absent or 0 then no version checks are done */
  version?: number;
};

export const indexTeamRequestSchema: Schema<IndexTeamRequest> = s.object<IndexTeamRequest>({
  team: teamInfoDefinitionSchema,
  version: s.optional(s.int()),
});
