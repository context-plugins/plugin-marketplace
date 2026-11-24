import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { governanceInternalSchema, governanceSchema, type Governance } from "./governance.js";
import { stateInternalSchema, stateSchema, type State } from "./state.js";

export type ApiV1TasksRequest = {
  /** A short name for the objective */
  title: string;
  /**
   * What the work is ultimately for, in a sentence or two. Kept apart from the conversation and
   * returned at the top of every context
   */
  objective: string;
  /** Keep it inside one workspace; only its members and administrators can see it */
  workspaceId?: string;
  /**
   * The flow its approvals and reviews belong to, so a decision put to approval lands on the same
   * timeline
   */
  flowId?: string;
  /**
   * Your own reference. An open objective you started under the same one is returned instead of a
   * new one, so a restarted agent resumes its goal
   */
  externalId?: string;
  /** A link to the conversation where this work happens, if your tool has one */
  sessionUrl?: string;
  /** The starting state, if anything is already known */
  state?: State;
  /**
   * Govern it from the start (Compliance Mode, Business and Enterprise): the AI system, purpose,
   * owners, risk, data and oversight
   */
  governance?: Governance;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksRequestProperties: s.Shape<ApiV1TasksRequest> = {
  title: s.string(),
  objective: s.string(),
  workspaceId: s.optional(s.string()),
  flowId: s.optional(s.string()),
  externalId: s.optional(s.string()),
  sessionUrl: s.optional(s.string()),
  state: s.optional(s.lazy(() => stateInternalSchema)),
  governance: s.optional(s.lazy(() => governanceInternalSchema)),
};

export const apiV1TasksRequestInternalSchema: Schema<ApiV1TasksRequest> = s.object<ApiV1TasksRequest>(
  apiV1TasksRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1TasksRequestSchema: Schema<ApiV1TasksRequest> = s.lazySchema(() =>
  s.object<ApiV1TasksRequest>(
    {
      ...apiV1TasksRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      objective: s.string().check(s.minLength(1), s.maxLength(4000)),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      sessionUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
      state: s.optional(s.lazy(() => stateSchema)),
      governance: s.optional(s.lazy(() => governanceSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
