import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { input2Schema, type Input2 } from "./unions/input2.js";
import { tokens1Schema, type Tokens1 } from "./unions/tokens1.js";

export type DedicatedTextClassificationBody = {
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /**
   * Input text to classify, encoded as a string or array of strings. To classify multiple inputs in
   * a single request, pass an array of strings.
   *
   * Either `input` or `tokens` field is required.
   */
  input?: Input2;
  /**
   * The tokenized prompt (i.e., input tokens).
   *
   * Either `input` or `tokens` field is required.
   */
  tokens?: Tokens1;
};

export const dedicatedTextClassificationBodySchema: Schema<DedicatedTextClassificationBody> =
  s.object<DedicatedTextClassificationBody>({
    model: s.string(),
    input: s.optional(s.lazy(() => input2Schema)),
    tokens: s.optional(s.lazy(() => tokens1Schema)),
  });
