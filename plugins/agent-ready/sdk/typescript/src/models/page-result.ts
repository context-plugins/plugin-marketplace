import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkResultAgentReadyScansApiSchema,
  type CheckResultAgentReadyScansApi,
} from "./check-result-agent-ready-scans-api.js";

/** Per-page check results. */
export type PageResult = {
  url: string;
  checks: CheckResultAgentReadyScansApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pageResultProperties: s.Shape<PageResult> = {
  url: s.string(),
  checks: s.array(s.lazy(() => checkResultAgentReadyScansApiSchema)),
};

export const pageResultInternalSchema: Schema<PageResult> = s.object<PageResult>(pageResultProperties, {
  additionalProperties: s.json(),
});

export const pageResultSchema: Schema<PageResult> = s.lazySchema(() =>
  s.object<PageResult>(
    {
      ...pageResultProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
