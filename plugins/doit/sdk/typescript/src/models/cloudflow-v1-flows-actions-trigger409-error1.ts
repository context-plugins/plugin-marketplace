import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowRunSummarySchema, type CloudflowRunSummary } from "./cloudflow-run-summary.js";
import { detailInternalSchema, detailSchema, type Detail } from "./detail.js";

export type CloudflowV1FlowsActionsTrigger409Error1 = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  code: string;
  retryable: boolean;
  details?: Detail[];
  docsUrl?: string | null;
  /** A run without its per-node detail. */
  execution?: CloudflowRunSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowV1FlowsActionsTrigger409Error1Properties: s.Shape<CloudflowV1FlowsActionsTrigger409Error1> = {
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.string(),
  instance: s.string(),
  code: s.string(),
  retryable: s.boolean(),
  details: s.optional(s.array(s.lazy(() => detailInternalSchema))),
  docsUrl: s.optionalNullable(s.string()),
  execution: s.optional(s.lazy(() => cloudflowRunSummarySchema)),
};

export const cloudflowV1FlowsActionsTrigger409Error1InternalSchema: Schema<CloudflowV1FlowsActionsTrigger409Error1> =
  s.object<CloudflowV1FlowsActionsTrigger409Error1>(cloudflowV1FlowsActionsTrigger409Error1Properties, {
    additionalProperties: s.json(),
  });

export const cloudflowV1FlowsActionsTrigger409Error1Schema: Schema<CloudflowV1FlowsActionsTrigger409Error1> =
  s.lazySchema(() =>
    s.object<CloudflowV1FlowsActionsTrigger409Error1>(
      {
        ...cloudflowV1FlowsActionsTrigger409Error1Properties,
        type: s.string().check(s.url()),
        instance: s.string().check(s.url()),
        code: s
          .string()
          .check(s.pattern("^([a-z][a-z0-9_]*|[a-z][a-z0-9]*(?:-[a-z0-9]+)*\\.[a-z][a-z0-9_]*)$")),
        details: s.optional(s.array(s.lazy(() => detailSchema))),
        docsUrl: s.optionalNullable(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
  );
