import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { model1Schema, type Model1 } from "./unions/model1.js";

export type ContainerTokenizationBody = {
  /** Routes the request to a specific adapter. */
  model?: Model1;
  /** Input text prompt to tokenize. */
  prompt: string;
};

export const containerTokenizationBodySchema: Schema<ContainerTokenizationBody> =
  s.object<ContainerTokenizationBody>({
    model: s.optional(s.lazy(() => model1Schema)),
    prompt: s.string(),
  });
