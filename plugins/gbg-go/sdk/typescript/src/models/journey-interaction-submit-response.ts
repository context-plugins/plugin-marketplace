import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyInteractionSubmitResponse = {
  /** @default "success" */
  status?: "success";
};

export const journeyInteractionSubmitResponseSchema: Schema<JourneyInteractionSubmitResponse> =
  s.object<JourneyInteractionSubmitResponse>({
    status: s.defaulted(s.literal("success"), "success"),
  });
