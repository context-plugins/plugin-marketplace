import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pullInternalSchema, pullSchema, type Pull } from "./pull.js";
import { release1InternalSchema, release1Schema, type Release1 } from "./release1.js";
import {
  reportDeliverdDevTasksApiInternalSchema,
  reportDeliverdDevTasksApiSchema,
  type ReportDeliverdDevTasksApi,
} from "./report-deliverd-dev-tasks-api.js";
import {
  resultDeliverdDevTasksApiInternalSchema,
  resultDeliverdDevTasksApiSchema,
  type ResultDeliverdDevTasksApi,
} from "./result-deliverd-dev-tasks-api.js";
import { runInternalSchema, runSchema, type Run } from "./run.js";
import {
  typeDeliverdDevTasksApiSchema,
  type TypeDeliverdDevTasksApi,
} from "./type-deliverd-dev-tasks-api.js";

export type ApiV1TasksGovernanceEvidenceRequest = {
  type: TypeDeliverdDevTasksApi;
  title: string;
  /** What it shows, for a reviewer */
  description?: string;
  url?: string;
  /** The controls this evidence speaks to; one item may satisfy several */
  controls?: string[];
  /** The finding in this task it rests on, if any */
  findingId?: string;
  /**
   * What was measured, one entry per metric: { metric, value, passed?, severity?, category?,
   * dataset?, url? }. A control with thresholds is judged on these
   */
  results?: ResultDeliverdDevTasksApi[];
  /** The run the results came from: { tool, runId?, name?, url?, release? } */
  run?: Run;
  /**
   * The release the results tested — any of provider, model, modelVersion, promptHash,
   * guardrailsHash — with results, a report or a pull. Evidence that names another release than the
   * AI system now runs does not count towards a control
   */
  release?: Release1;
  /** A tool's own report, turned into results here. Instead of results */
  report?: ReportDeliverdDevTasksApi;
  /**
   * Read the results from a connected tool with the organisation's own keys, which you never hold.
   * Instead of results or a report
   */
  pull?: Pull;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksGovernanceEvidenceRequestProperties: s.Shape<ApiV1TasksGovernanceEvidenceRequest> = {
  type: typeDeliverdDevTasksApiSchema,
  title: s.string(),
  description: s.optional(s.string()),
  url: s.optional(s.string()),
  controls: s.optional(s.array(s.string())),
  findingId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => resultDeliverdDevTasksApiInternalSchema))),
  run: s.optional(s.lazy(() => runInternalSchema)),
  release: s.optional(s.lazy(() => release1InternalSchema)),
  report: s.optional(s.lazy(() => reportDeliverdDevTasksApiInternalSchema)),
  pull: s.optional(s.lazy(() => pullInternalSchema)),
};

export const apiV1TasksGovernanceEvidenceRequestInternalSchema: Schema<ApiV1TasksGovernanceEvidenceRequest> =
  s.object<ApiV1TasksGovernanceEvidenceRequest>(apiV1TasksGovernanceEvidenceRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksGovernanceEvidenceRequestSchema: Schema<ApiV1TasksGovernanceEvidenceRequest> =
  s.lazySchema(() =>
    s.object<ApiV1TasksGovernanceEvidenceRequest>(
      {
        ...apiV1TasksGovernanceEvidenceRequestProperties,
        title: s.string().check(s.minLength(1), s.maxLength(200)),
        description: s.optional(s.string().check(s.maxLength(4000))),
        url: s.optional(s.string().check(s.url())),
        controls: s.optional(
          s.array(s.string().check(s.pattern("^[a-z][a-z0-9_]{1,59}$"))).check(s.maxLength(20)),
        ),
        results: s.optional(
          s.array(s.lazy(() => resultDeliverdDevTasksApiSchema)).check(s.minLength(1), s.maxLength(500)),
        ),
        run: s.optional(s.lazy(() => runSchema)),
        release: s.optional(s.lazy(() => release1Schema)),
        report: s.optional(s.lazy(() => reportDeliverdDevTasksApiSchema)),
        pull: s.optional(s.lazy(() => pullSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
