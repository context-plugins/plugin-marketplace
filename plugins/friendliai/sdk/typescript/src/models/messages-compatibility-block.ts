import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type MessagesCompatibilityBlock = {
  /**
   * Compatibility block type. These blocks are accepted for parsing compatibility and ignored for
   * generation.
   */
  type: Type1;
};

export const messagesCompatibilityBlockSchema: Schema<MessagesCompatibilityBlock> =
  s.object<MessagesCompatibilityBlock>({
    type: type1Schema,
  });
