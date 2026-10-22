import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contextInstanceEvaluationReasonSchema,
  type ContextInstanceEvaluationReason,
} from "./context-instance-evaluation-reason.js";
import { linkSchema, type Link } from "./link.js";

export type ContextInstanceEvaluation = {
  /** Name of the flag. */
  name: string;
  /** Key of the flag. */
  key: string;
  /**
   * The value of the flag variation that the context receives. If there is no defined default rule,
   * this is null.
   */
  value: Record<string, unknown>;
  reason?: ContextInstanceEvaluationReason;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const contextInstanceEvaluationSchema: Schema<ContextInstanceEvaluation> =
  s.object<ContextInstanceEvaluation>({
    name: s.string(),
    key: s.string(),
    value: s.record(s.string(), s.unknown()),
    reason: s.optional(s.lazy(() => contextInstanceEvaluationReasonSchema)),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      value: "_value",
      links: "_links",
    },
  });
