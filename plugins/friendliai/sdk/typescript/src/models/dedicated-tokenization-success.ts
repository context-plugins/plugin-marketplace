import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DedicatedTokenizationSuccess = {
  /** A list of token IDs. */
  tokens: number[];
};

export const dedicatedTokenizationSuccessSchema: Schema<DedicatedTokenizationSuccess> =
  s.object<DedicatedTokenizationSuccess>({
    tokens: s.array(s.int()),
  });
