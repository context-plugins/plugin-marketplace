import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { input2Schema, type Input2 } from "./unions/input2.js";
import { model1Schema, type Model1 } from "./unions/model1.js";
import { tokens1Schema, type Tokens1 } from "./unions/tokens1.js";

export type ContainerTextClassificationBody = {
  /** Routes the request to a specific adapter. */
  model?: Model1;
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

export const containerTextClassificationBodySchema: Schema<ContainerTextClassificationBody> =
  s.object<ContainerTextClassificationBody>({
    model: s.optional(s.lazy(() => model1Schema)),
    input: s.optional(s.lazy(() => input2Schema)),
    tokens: s.optional(s.lazy(() => tokens1Schema)),
  });
