import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OperatorScope = {
  datasource?: string;
  docType?: string;
};

export const operatorScopeSchema: Schema<OperatorScope> = s.object<OperatorScope>({
  datasource: s.optional(s.string()),
  docType: s.optional(s.string()),
});
