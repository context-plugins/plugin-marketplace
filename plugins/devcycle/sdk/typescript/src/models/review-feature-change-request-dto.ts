import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

export type ReviewFeatureChangeRequestDto = {
  action: Action;
  comment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewFeatureChangeRequestDtoSchema: Schema<ReviewFeatureChangeRequestDto> =
  s.object<ReviewFeatureChangeRequestDto>(
    {
      action: actionSchema,
      comment: s.string(),
    },
    { additionalProperties: s.json() },
  );
