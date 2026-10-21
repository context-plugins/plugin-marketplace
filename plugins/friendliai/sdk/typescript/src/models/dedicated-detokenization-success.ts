import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DedicatedDetokenizationSuccess = {
  /** Detokenized text output. */
  text: string;
};

export const dedicatedDetokenizationSuccessSchema: Schema<DedicatedDetokenizationSuccess> =
  s.object<DedicatedDetokenizationSuccess>({
    text: s.string(),
  });
