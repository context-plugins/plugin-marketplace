import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conditionalSpecificationSchema,
  type ConditionalSpecification,
} from "./conditional-specification.js";
import { dialogStateSchema, type DialogState } from "./dialog-state.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type IntentClosingSetting = {
  closingResponse?: ResponseSpecification;
  /**
   * Specifies whether an intent's closing response is used. When this field is false, the closing
   * response isn't sent to the user. If the active field isn't specified, the default is true.
   */
  active?: boolean;
  nextStep?: DialogState;
  conditional?: ConditionalSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentClosingSettingSchema: Schema<IntentClosingSetting> = s.object<IntentClosingSetting>(
  {
    closingResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
    active: s.optional(s.boolean()),
    nextStep: s.optional(s.lazy(() => dialogStateSchema)),
    conditional: s.optional(s.lazy(() => conditionalSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
