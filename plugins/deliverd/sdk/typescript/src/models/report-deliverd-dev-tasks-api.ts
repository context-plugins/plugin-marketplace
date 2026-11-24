import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  formatDeliverdDevTasksApiSchema,
  type FormatDeliverdDevTasksApi,
} from "./format-deliverd-dev-tasks-api.js";

/** A tool's own report, turned into results here. Instead of results */
export type ReportDeliverdDevTasksApi = {
  /** The tool that wrote it: deliverd, promptfoo, inspect, garak, weave, braintrust, junit */
  format: FormatDeliverdDevTasksApi;
  /** The report file as the tool wrote it */
  content: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reportDeliverdDevTasksApiProperties: s.Shape<ReportDeliverdDevTasksApi> = {
  format: formatDeliverdDevTasksApiSchema,
  content: s.string(),
};

export const reportDeliverdDevTasksApiInternalSchema: Schema<ReportDeliverdDevTasksApi> =
  s.object<ReportDeliverdDevTasksApi>(reportDeliverdDevTasksApiProperties, {
    additionalProperties: s.json(),
  });

export const reportDeliverdDevTasksApiSchema: Schema<ReportDeliverdDevTasksApi> = s.lazySchema(() =>
  s.object<ReportDeliverdDevTasksApi>(
    {
      ...reportDeliverdDevTasksApiProperties,
      content: s.string().check(s.minLength(1), s.maxLength(4000000)),
    },
    { additionalProperties: s.json() },
  ),
);
