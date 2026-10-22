import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContainerDetokenizationSuccess = {
  /** Detokenized text output. */
  text: string;
};

export const containerDetokenizationSuccessSchema: Schema<ContainerDetokenizationSuccess> =
  s.object<ContainerDetokenizationSuccess>({
    text: s.string(),
  });
