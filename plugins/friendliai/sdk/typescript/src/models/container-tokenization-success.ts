import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContainerTokenizationSuccess = {
  /** A list of token IDs. */
  tokens: number[];
};

export const containerTokenizationSuccessSchema: Schema<ContainerTokenizationSuccess> =
  s.object<ContainerTokenizationSuccess>({
    tokens: s.array(s.int()),
  });
