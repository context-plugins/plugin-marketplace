import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  journeyInteractionSubmitResponseSchema,
  type JourneyInteractionSubmitResponse,
} from "../journey-interaction-submit-response.js";
import {
  journeyInteractionSubmitResponse1Schema,
  type JourneyInteractionSubmitResponse1,
} from "../journey-interaction-submit-response1.js";

export type JourneyInteractionSubmitResponse2 =
  | JourneyInteractionSubmitResponse
  | JourneyInteractionSubmitResponse1;

export const journeyInteractionSubmitResponse2Schema: Schema<JourneyInteractionSubmitResponse2> =
  s.of<JourneyInteractionSubmitResponse2>(
    s.union([
      s.lazy(() => journeyInteractionSubmitResponseSchema),
      s.lazy(() => journeyInteractionSubmitResponse1Schema),
    ]),
  );
