import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind6Schema, type Kind6 } from "./kind6.js";
import { origin6Schema, type Origin6 } from "./origin6.js";

export type ApiV1TasksSideTasksRequest = {
  /** What the side task is, as it will appear under the objective */
  title: string;
  /** What exactly it has to solve. Narrow is better: it is done when this is answered */
  goal: string;
  /** side_task, investigation, research, debug or decision; side_task when omitted */
  kind?: Kind6;
  /**
   * The context it needs, replacing what Deliverd would select from the parent. Facts, not the
   * transcript
   */
  relevantContext?: string[];
  /** What it must respect; the parent's constraints when omitted */
  knownConstraints?: string[];
  /**
   * One of the parent's open questions this is meant to answer; it comes off the list when the
   * result is applied
   */
  resolvesQuestion?: string;
  /** suggested when you proposed moving this into a side task and the person agreed */
  origin?: Origin6;
  sessionUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksSideTasksRequestProperties: s.Shape<ApiV1TasksSideTasksRequest> = {
  title: s.string(),
  goal: s.string(),
  kind: s.optional(s.lazy(() => kind6Schema)),
  relevantContext: s.optional(s.array(s.string())),
  knownConstraints: s.optional(s.array(s.string())),
  resolvesQuestion: s.optional(s.string()),
  origin: s.optional(s.lazy(() => origin6Schema)),
  sessionUrl: s.optional(s.string()),
};

export const apiV1TasksSideTasksRequestInternalSchema: Schema<ApiV1TasksSideTasksRequest> =
  s.object<ApiV1TasksSideTasksRequest>(apiV1TasksSideTasksRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksSideTasksRequestSchema: Schema<ApiV1TasksSideTasksRequest> = s.lazySchema(() =>
  s.object<ApiV1TasksSideTasksRequest>(
    {
      ...apiV1TasksSideTasksRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      goal: s.string().check(s.minLength(1), s.maxLength(4000)),
      relevantContext: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(1000))).check(s.maxLength(20)),
      ),
      knownConstraints: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(20)),
      ),
      resolvesQuestion: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
      sessionUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
