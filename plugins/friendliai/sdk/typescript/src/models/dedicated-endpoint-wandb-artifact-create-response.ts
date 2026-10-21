import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamNameSchema, type TeamName } from "./unions/team-name.js";

/** Endpoint create response. */
export type DedicatedEndpointWandbArtifactCreateResponse = {
  /** The ID of the created endpoint. */
  endpointId: string;
  /** The name of the created endpoint. */
  endpointName: string;
  /** The ID of the project where the endpoint was created. */
  projectId: string;
  /** The name of the project where the endpoint was created. */
  projectName: string;
  /** The ID of the team where the endpoint was created. */
  teamId: string;
  /** The name of the team where the endpoint was created. */
  teamName: TeamName;
};

export const dedicatedEndpointWandbArtifactCreateResponseSchema: Schema<DedicatedEndpointWandbArtifactCreateResponse> =
  s.object<DedicatedEndpointWandbArtifactCreateResponse>({
    endpointId: s.string(),
    endpointName: s.string(),
    projectId: s.string(),
    projectName: s.string(),
    teamId: s.string(),
    teamName: teamNameSchema,
  });
