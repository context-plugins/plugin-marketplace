import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionalValueSchema, type ConditionalValue } from "./conditional-value.js";

/**
 * Conditional branch expression.
 *
 * Note: CaseExpression is currently reserved and not yet executed at runtime.
 */
export type CaseExpression = {
  /** Ordered conditional branches (reserved for future runtime support). */
  case: ConditionalValue[];
};

export const caseExpressionSchema: Schema<CaseExpression> = s.object<CaseExpression>({
  case: s.array(s.lazy(() => conditionalValueSchema)),
});
