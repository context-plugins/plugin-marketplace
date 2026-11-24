import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";
import {
  stillWaitingResponseSpecificationSchema,
  type StillWaitingResponseSpecification,
} from "./still-waiting-response-specification.js";

export type WaitAndContinueSpecification = {
  waitingResponse?: ResponseSpecification;
  continueResponse?: ResponseSpecification;
  stillWaitingResponse?: StillWaitingResponseSpecification;
  /**
   * Specifies whether the bot will wait for a user to respond. When this field is false, wait and
   * continue responses for a slot aren't used. If the active field isn't specified, the default is
   * true.
   */
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const waitAndContinueSpecificationSchema: Schema<WaitAndContinueSpecification> =
  s.object<WaitAndContinueSpecification>(
    {
      waitingResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      continueResponse: s.optional(s.lazy(() => responseSpecificationSchema)),
      stillWaitingResponse: s.optional(s.lazy(() => stillWaitingResponseSpecificationSchema)),
      active: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
