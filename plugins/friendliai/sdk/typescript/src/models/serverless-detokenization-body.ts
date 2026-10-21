import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServerlessDetokenizationBody = {
  /**
   * Code of the model to use. See [available model
   * list](https://friendli.ai/docs/guides/model-apis/pricing#billing-methods).
   */
  model: string;
  /** A token sequence to detokenize. */
  tokens: number[];
};

export const serverlessDetokenizationBodySchema: Schema<ServerlessDetokenizationBody> =
  s.object<ServerlessDetokenizationBody>({
    model: s.string(),
    tokens: s.array(s.int()),
  });
