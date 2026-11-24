import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassPullRequestInputPropertiesDto1Schema,
  type CompassPullRequestInputPropertiesDto1,
} from "./compass-pull-request-input-properties-dto1.js";

/**
 * A pull request event. Warning: This option is currently only usable by Forge apps and does not
 * add events to the Activity Feed.
 */
export type CompassCreatePullRequestEventInputDto = {
  /** The last time this event was updated. */
  lastUpdated: Date;
  /** The cloud ID of the event. */
  cloudId?: string | null;
  /** The list of properties of the pull request event. */
  pullRequestProperties: CompassPullRequestInputPropertiesDto1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassCreatePullRequestEventInputDtoSchema: Schema<CompassCreatePullRequestEventInputDto> =
  s.object<CompassCreatePullRequestEventInputDto>(
    {
      lastUpdated: s.dateTime(),
      cloudId: s.optionalNullable(s.string()),
      pullRequestProperties: compassPullRequestInputPropertiesDto1Schema,
    },
    { additionalProperties: s.json() },
  );
