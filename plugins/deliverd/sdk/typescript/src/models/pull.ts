import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceDeliverdDevTasksApiSchema,
  type SourceDeliverdDevTasksApi,
} from "./source-deliverd-dev-tasks-api.js";

/**
 * Read the results from a connected tool with the organisation's own keys, which you never hold.
 * Instead of results or a report
 */
export type Pull = {
  /**
   * The connected tool to read from (Organisation → Integrations & webhooks): langfuse, langsmith,
   * braintrust or weave
   */
  source: SourceDeliverdDevTasksApi;
  /**
   * The experiment's name; the newest with it is read. In LangSmith and Braintrust, also the name a
   * run suffixed (credit-memo-v12 finds credit-memo-v12-1a2b3c4d); in Weave, the evaluation's name
   * or its run's
   */
  experiment?: string;
  /** Or the experiment's id, exactly (in Weave, the evaluation run's call id) */
  experimentId?: string;
  /** Look for it from this time; 90 days back when absent */
  since?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pullProperties: s.Shape<Pull> = {
  source: sourceDeliverdDevTasksApiSchema,
  experiment: s.optional(s.string()),
  experimentId: s.optional(s.string()),
  since: s.optional(s.dateTime()),
};

export const pullInternalSchema: Schema<Pull> = s.object<Pull>(pullProperties, {
  additionalProperties: s.json(),
});

export const pullSchema: Schema<Pull> = s.lazySchema(() =>
  s.object<Pull>(
    {
      ...pullProperties,
      experiment: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      experimentId: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
