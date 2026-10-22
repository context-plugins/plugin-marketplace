import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  journeyInteractionFetchResponseSchema,
  type JourneyInteractionFetchResponse,
} from "../journey-interaction-fetch-response.js";
import {
  journeyInteractionFetchResponse1Schema,
  type JourneyInteractionFetchResponse1,
} from "../journey-interaction-fetch-response1.js";
import {
  journeyInteractionFetchResponse2Schema,
  type JourneyInteractionFetchResponse2,
} from "../journey-interaction-fetch-response2.js";

export type JourneyInteractionFetchResponse3 =
  | JourneyInteractionFetchResponse
  | JourneyInteractionFetchResponse1
  | JourneyInteractionFetchResponse2;

export const journeyInteractionFetchResponse3Schema: Schema<JourneyInteractionFetchResponse3> =
  s.of<JourneyInteractionFetchResponse3>(
    s.union([
      s.lazy(() => journeyInteractionFetchResponseSchema),
      s.lazy(() => journeyInteractionFetchResponse1Schema),
      s.lazy(() => journeyInteractionFetchResponse2Schema),
    ]),
  );
