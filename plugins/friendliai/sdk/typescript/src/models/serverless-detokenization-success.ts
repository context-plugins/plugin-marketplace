import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServerlessDetokenizationSuccess = {
  /** Detokenized text output. */
  text: string;
};

export const serverlessDetokenizationSuccessSchema: Schema<ServerlessDetokenizationSuccess> =
  s.object<ServerlessDetokenizationSuccess>({
    text: s.string(),
  });
