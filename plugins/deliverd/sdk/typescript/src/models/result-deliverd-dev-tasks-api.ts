import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  severityDeliverdDevTasksApiSchema,
  type SeverityDeliverdDevTasksApi,
} from "./severity-deliverd-dev-tasks-api.js";

export type ResultDeliverdDevTasksApi = {
  /** What was measured, as the tool names it: pass_rate, accuracy, attack_success_rate */
  metric: string;
  /** The measured value */
  value: number;
  /** The tool's own verdict on this result, where it gives one */
  passed?: boolean;
  /** How serious a failure of this result is: low, medium, high or critical */
  severity?: SeverityDeliverdDevTasksApi;
  /** A grouping the tool gives it: a red-team plugin, a risk category, a dataset slice */
  category?: string;
  dataset?: string;
  /** The trace, row or run this result can be inspected at */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resultDeliverdDevTasksApiProperties: s.Shape<ResultDeliverdDevTasksApi> = {
  metric: s.string(),
  value: s.float64(),
  passed: s.optional(s.boolean()),
  severity: s.optional(s.lazy(() => severityDeliverdDevTasksApiSchema)),
  category: s.optional(s.string()),
  dataset: s.optional(s.string()),
  url: s.optional(s.string()),
};

export const resultDeliverdDevTasksApiInternalSchema: Schema<ResultDeliverdDevTasksApi> =
  s.object<ResultDeliverdDevTasksApi>(resultDeliverdDevTasksApiProperties, {
    additionalProperties: s.json(),
  });

export const resultDeliverdDevTasksApiSchema: Schema<ResultDeliverdDevTasksApi> = s.lazySchema(() =>
  s.object<ResultDeliverdDevTasksApi>(
    {
      ...resultDeliverdDevTasksApiProperties,
      metric: s.string().check(s.minLength(1), s.maxLength(200)),
      category: s.optional(s.string().check(s.maxLength(120))),
      dataset: s.optional(s.string().check(s.maxLength(200))),
      url: s.optional(s.string().check(s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
