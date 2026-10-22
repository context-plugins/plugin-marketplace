import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contextInstanceEvaluationSchema,
  type ContextInstanceEvaluation,
} from "./context-instance-evaluation.js";
import { linkSchema, type Link } from "./link.js";

export type ContextInstanceEvaluations = {
  /** Details on the flag evaluations for this context instance */
  items: ContextInstanceEvaluation[];
  /** The number of flags */
  totalCount?: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const contextInstanceEvaluationsSchema: Schema<ContextInstanceEvaluations> =
  s.object<ContextInstanceEvaluations>({
    items: s.array(s.lazy(() => contextInstanceEvaluationSchema)),
    totalCount: s.optional(s.int()),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
