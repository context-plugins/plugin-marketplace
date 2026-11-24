import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationJourneySchema, type AutomationJourney } from "./automation-journey.js";

export type AutomationJourneysResponse = {
  /** A subscribers' journey through an automation flow. */
  data: AutomationJourney;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationJourneysResponseSchema: Schema<AutomationJourneysResponse> =
  s.object<AutomationJourneysResponse>(
    {
      data: automationJourneySchema,
    },
    { additionalProperties: s.json() },
  );
