import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServerlessTokenizationBody = {
  /**
   * Code of the model to use. See [available model
   * list](https://friendli.ai/docs/guides/model-apis/pricing#billing-methods).
   */
  model: string;
  /** Input text prompt to tokenize. */
  prompt: string;
};

export const serverlessTokenizationBodySchema: Schema<ServerlessTokenizationBody> =
  s.object<ServerlessTokenizationBody>({
    model: s.string(),
    prompt: s.string(),
  });
