import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestCancelActivityTaskDecisionAttributes = {
  /** The activityId of the activity task to be canceled. */
  activityId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestCancelActivityTaskDecisionAttributesSchema: Schema<RequestCancelActivityTaskDecisionAttributes> =
  s.object<RequestCancelActivityTaskDecisionAttributes>(
    {
      activityId: s.string(),
    },
    { additionalProperties: s.json() },
  );
