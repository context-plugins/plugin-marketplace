import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  compassPushEventAuthorInputDtoSchema,
  type CompassPushEventAuthorInputDto,
} from "./compass-push-event-author-input-dto.js";

/** The list of properties of the push event. */
export type CompassPushEventInputPropertiesDto = {
  /** The ID of the push to event. */
  id: string;
  /** The name of the branch being pushed to. */
  branchName: string;
  /** The author who made the push. */
  author?: CompassPushEventAuthorInputDto | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compassPushEventInputPropertiesDtoSchema: Schema<CompassPushEventInputPropertiesDto> =
  s.object<CompassPushEventInputPropertiesDto>(
    {
      id: s.string(),
      branchName: s.string(),
      author: s.optionalNullable(s.lazy(() => compassPushEventAuthorInputDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
