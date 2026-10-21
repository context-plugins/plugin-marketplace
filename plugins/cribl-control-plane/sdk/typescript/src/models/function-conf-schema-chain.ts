import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaChain = {
  /** The data processor (Pack/Pipeline) to send events through */
  processor?: string;
};

export const functionConfSchemaChainSchema: Schema<FunctionConfSchemaChain> =
  s.object<FunctionConfSchemaChain>({
    processor: s.optional(s.string()),
  });
