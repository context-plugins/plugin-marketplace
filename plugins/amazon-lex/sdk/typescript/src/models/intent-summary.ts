import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputContextSchema, type InputContext } from "./input-context.js";
import { outputContextSchema, type OutputContext } from "./output-context.js";

export type IntentSummary = {
  /**
   * The unique identifier assigned to the intent. Use this ID to get detailed information about the
   * intent with the DescribeIntent operation.
   */
  intentId?: string;
  /** The name of the intent. */
  intentName?: string;
  /** The display name of the intent. */
  intentDisplayName?: string;
  /** The description of the intent. */
  description?: string;
  /** If this intent is derived from a built-in intent, the name of the parent intent. */
  parentIntentSignature?: string;
  /** The input contexts that must be active for this intent to be considered for recognition. */
  inputContexts?: InputContext[];
  /** The output contexts that are activated when this intent is fulfilled. */
  outputContexts?: OutputContext[];
  /** The timestamp of the date and time that the intent was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentSummarySchema: Schema<IntentSummary> = s.object<IntentSummary>(
  {
    intentId: s.optional(s.string()),
    intentName: s.optional(s.string()),
    intentDisplayName: s.optional(s.string()),
    description: s.optional(s.string()),
    parentIntentSignature: s.optional(s.string()),
    inputContexts: s.optional(s.array(s.lazy(() => inputContextSchema))),
    outputContexts: s.optional(s.array(s.lazy(() => outputContextSchema))),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
