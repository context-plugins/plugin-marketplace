import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyInteractionSubmitResponse1 = {
  /** @default "error" */
  status?: "error";
  /** Error code indicating the type of error */
  code: number;
  /** Error message detailing the issue */
  message: string;
};

export const journeyInteractionSubmitResponse1Schema: Schema<JourneyInteractionSubmitResponse1> =
  s.object<JourneyInteractionSubmitResponse1>({
    status: s.defaulted(s.literal("error"), "error"),
    code: s.float64(),
    message: s.string(),
  });
