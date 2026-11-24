import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputInternalSchema, inputSchema, type Input } from "./input.js";
import { promptInternalSchema, promptSchema, type Prompt } from "./prompt.js";
import { stepInternalSchema, stepSchema, type Step } from "./step.js";

export type ApiV1PlaybooksRequest = {
  /** The job, as people name it: Onboard a supplier */
  title: string;
  /**
   * The outcome when it is done. Becomes the objective of every run; for a prompt, the one line
   * people see
   */
  purpose: string;
  /** The steps. Required for a playbook; left out for a prompt, which has one step of its own */
  steps?: Step[];
  /**
   * Send this instead of steps to draft an approved prompt: words people and agents use, versioned
   * and approved like any playbook
   */
  prompt?: Prompt;
  /** What a run needs to be given, such as the supplier's name */
  inputs?: Input[];
  /** Knowledge every step relies on */
  knowledgeIds?: string[];
  workspaceId?: string;
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PlaybooksRequestProperties: s.Shape<ApiV1PlaybooksRequest> = {
  title: s.string(),
  purpose: s.string(),
  steps: s.optional(s.array(s.lazy(() => stepInternalSchema))),
  prompt: s.optional(s.lazy(() => promptInternalSchema)),
  inputs: s.optional(s.array(s.lazy(() => inputInternalSchema))),
  knowledgeIds: s.optional(s.array(s.string())),
  workspaceId: s.optional(s.string()),
  note: s.optional(s.string()),
};

export const apiV1PlaybooksRequestInternalSchema: Schema<ApiV1PlaybooksRequest> =
  s.object<ApiV1PlaybooksRequest>(apiV1PlaybooksRequestProperties, { additionalProperties: s.json() });

export const apiV1PlaybooksRequestSchema: Schema<ApiV1PlaybooksRequest> = s.lazySchema(() =>
  s.object<ApiV1PlaybooksRequest>(
    {
      ...apiV1PlaybooksRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      purpose: s.string().check(s.minLength(1), s.maxLength(4000)),
      steps: s.optional(s.array(s.lazy(() => stepSchema)).check(s.minLength(1), s.maxLength(30))),
      prompt: s.optional(s.lazy(() => promptSchema)),
      inputs: s.optional(s.array(s.lazy(() => inputSchema)).check(s.maxLength(20))),
      knowledgeIds: s.optional(s.array(s.string()).check(s.maxLength(50))),
      note: s.optional(s.string().check(s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
