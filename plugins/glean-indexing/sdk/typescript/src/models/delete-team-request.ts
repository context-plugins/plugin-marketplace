import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /deleteteam API call */
export type DeleteTeamRequest = {
  /** The deleted team's id */
  id: string;
};

export const deleteTeamRequestSchema: Schema<DeleteTeamRequest> = s.object<DeleteTeamRequest>({
  id: s.string(),
});
