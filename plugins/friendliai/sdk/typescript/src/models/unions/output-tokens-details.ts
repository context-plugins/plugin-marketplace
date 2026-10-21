import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesOutputTokensDetailsSchema,
  type ResponsesOutputTokensDetails,
} from "../responses-output-tokens-details.js";

/** A detailed breakdown of the output tokens. */
export type OutputTokensDetails = ResponsesOutputTokensDetails;

export const outputTokensDetailsSchema: Schema<OutputTokensDetails> = s.of<OutputTokensDetails>(
  s.union([s.lazy(() => responsesOutputTokensDetailsSchema)]),
);
