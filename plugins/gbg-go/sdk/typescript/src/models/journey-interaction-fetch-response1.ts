import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JourneyInteractionFetchResponse1 = {
  /** @default "error" */
  status?: "error";
  /** Error code indicating the type of error */
  code: number;
  /** Error message detailing the issue */
  message: string;
};

export const journeyInteractionFetchResponse1Schema: Schema<JourneyInteractionFetchResponse1> =
  s.object<JourneyInteractionFetchResponse1>({
    status: s.defaulted(s.literal("error"), "error"),
    code: s.float64(),
    message: s.string(),
  });
