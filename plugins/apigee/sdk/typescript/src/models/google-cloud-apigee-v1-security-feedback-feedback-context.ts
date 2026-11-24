import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";

/** FeedbackContext captures the intent of the submitted feedback. */
export type GoogleCloudApigeeV1SecurityFeedbackFeedbackContext = {
  /** Required. The attribute the user is providing feedback about. */
  attribute?: Attribute;
  /** Required. The values of the attribute the user is providing feedback about. */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityFeedbackFeedbackContextSchema: Schema<GoogleCloudApigeeV1SecurityFeedbackFeedbackContext> =
  s.object<GoogleCloudApigeeV1SecurityFeedbackFeedbackContext>(
    {
      attribute: s.optional(s.lazy(() => attributeSchema)),
      values: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
