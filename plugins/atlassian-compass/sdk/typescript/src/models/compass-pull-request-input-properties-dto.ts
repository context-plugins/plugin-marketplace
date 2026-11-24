import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** The list of properties of the pull event. */
export type CompassPullRequestInputPropertiesDto = {
  /** The ID of the pull request event. */
  id: string;
  /** The URL of the repository of the pull request. */
  repoUrl: string;
  /** The URL of the pull request. */
  pullRequestUrl: string;
  /** The status of the pull request. */
  status: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassPullRequestInputPropertiesDtoSchema: Schema<CompassPullRequestInputPropertiesDto> =
  s.object<CompassPullRequestInputPropertiesDto>(
    {
      id: s.string(),
      repoUrl: s.string(),
      pullRequestUrl: s.string(),
      status: statusSchema,
    },
    { additionalProperties: s.json() },
  );
