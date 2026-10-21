import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responsesInputTokensDetails2Schema,
  type ResponsesInputTokensDetails2,
} from "./responses-input-tokens-details2.js";
import { outputTokensDetailsSchema, type OutputTokensDetails } from "./unions/output-tokens-details.js";

export type ResponsesUsage = {
  /** The number of input tokens. */
  inputTokens: number;
  /** A detailed breakdown of the input tokens. */
  inputTokensDetails: ResponsesInputTokensDetails2;
  /** The number of output tokens. */
  outputTokens: number;
  /** A detailed breakdown of the output tokens. */
  outputTokensDetails?: OutputTokensDetails;
  /** The total number of tokens used. */
  totalTokens: number;
};

export const responsesUsageSchema: Schema<ResponsesUsage> = s.object<ResponsesUsage>({
  inputTokens: s.int(),
  inputTokensDetails: responsesInputTokensDetails2Schema,
  outputTokens: s.int(),
  outputTokensDetails: s.optional(s.lazy(() => outputTokensDetailsSchema)),
  totalTokens: s.int(),
  _keysMap: {
    inputTokens: "input_tokens",
    inputTokensDetails: "input_tokens_details",
    outputTokens: "output_tokens",
    outputTokensDetails: "output_tokens_details",
    totalTokens: "total_tokens",
  },
});
