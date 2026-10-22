import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operatorScopeSchema, type OperatorScope } from "./operator-scope.js";
import { operatorTypeSchema, type OperatorType } from "./operator-type.js";

export type OperatorMetadata = {
  name: string;
  /**
   * Whether this operator is supported by default or something that was created within a workplace
   * app (e.g. custom jira field).
   */
  isCustom?: boolean;
  operatorType?: OperatorType;
  helpText?: string;
  scopes?: OperatorScope[];
  /** Raw/canonical value of the operator. Only applies when result is an operator value. */
  value?: string;
  /**
   * Human readable value of the operator that can be shown to the user. Only applies when result is
   * an operator value.
   */
  displayValue?: string;
};

export const operatorMetadataSchema: Schema<OperatorMetadata> = s.object<OperatorMetadata>({
  name: s.string(),
  isCustom: s.optional(s.boolean()),
  operatorType: s.optional(s.lazy(() => operatorTypeSchema)),
  helpText: s.optional(s.string()),
  scopes: s.optional(s.array(s.lazy(() => operatorScopeSchema))),
  value: s.optional(s.string()),
  displayValue: s.optional(s.string()),
});
