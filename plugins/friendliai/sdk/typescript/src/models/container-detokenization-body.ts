import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { model1Schema, type Model1 } from "./unions/model1.js";

export type ContainerDetokenizationBody = {
  /** Routes the request to a specific adapter. */
  model?: Model1;
  /** A token sequence to detokenize. */
  tokens: number[];
};

export const containerDetokenizationBodySchema: Schema<ContainerDetokenizationBody> =
  s.object<ContainerDetokenizationBody>({
    model: s.optional(s.lazy(() => model1Schema)),
    tokens: s.array(s.int()),
  });
