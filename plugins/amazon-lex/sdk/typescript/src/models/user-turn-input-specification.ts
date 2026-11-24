import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  inputSessionStateSpecificationSchema,
  type InputSessionStateSpecification,
} from "./input-session-state-specification.js";
import {
  utteranceInputSpecificationSchema,
  type UtteranceInputSpecification,
} from "./utterance-input-specification.js";

export type UserTurnInputSpecification = {
  utteranceInput: UtteranceInputSpecification;
  /** Request attributes of the user turn. */
  requestAttributes?: Record<string, string>;
  sessionState?: InputSessionStateSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTurnInputSpecificationSchema: Schema<UserTurnInputSpecification> =
  s.object<UserTurnInputSpecification>(
    {
      utteranceInput: utteranceInputSpecificationSchema,
      requestAttributes: s.optional(s.record(s.string(), s.string())),
      sessionState: s.optional(s.lazy(() => inputSessionStateSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
