import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state5InternalSchema, state5Schema, type State5 } from "./state5.js";
import { status5Schema, type Status5 } from "./status5.js";

export type ApiV1TasksRequest1 = {
  title?: string;
  /**
   * Refused to an agent: only a person changes what the work is for. Record the change you propose
   * as a finding
   */
  objective?: string;
  /** open, in_progress, blocked or awaiting_approval. Finishing has its own call */
  status?: Status5;
  sessionUrl?: string | null;
  state?: State5;
  /** The version you read; the update is refused if somebody wrote in between */
  expectedVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksRequest1Properties: s.Shape<ApiV1TasksRequest1> = {
  title: s.optional(s.string()),
  objective: s.optional(s.string()),
  status: s.optional(s.lazy(() => status5Schema)),
  sessionUrl: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => state5InternalSchema)),
  expectedVersion: s.optional(s.int()),
};

export const apiV1TasksRequest1InternalSchema: Schema<ApiV1TasksRequest1> = s.object<ApiV1TasksRequest1>(
  apiV1TasksRequest1Properties,
  { additionalProperties: s.json() },
);

export const apiV1TasksRequest1Schema: Schema<ApiV1TasksRequest1> = s.lazySchema(() =>
  s.object<ApiV1TasksRequest1>(
    {
      ...apiV1TasksRequest1Properties,
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      objective: s.optional(s.string().check(s.minLength(1), s.maxLength(4000))),
      sessionUrl: s.optionalNullable(s.string().check(s.maxLength(2000), s.url())),
      state: s.optional(s.lazy(() => state5Schema)),
      expectedVersion: s.optional(s.int().check(s.gt(0))),
    },
    { additionalProperties: s.json() },
  ),
);
