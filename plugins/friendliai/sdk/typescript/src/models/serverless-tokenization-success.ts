import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServerlessTokenizationSuccess = {
  /** A list of token IDs. */
  tokens: number[];
};

export const serverlessTokenizationSuccessSchema: Schema<ServerlessTokenizationSuccess> =
  s.object<ServerlessTokenizationSuccess>({
    tokens: s.array(s.int()),
  });
