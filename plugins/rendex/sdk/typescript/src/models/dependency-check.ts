import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusRendexRenderingHealthApiSchema,
  type StatusRendexRenderingHealthApi,
} from "./status-rendex-rendering-health-api.js";

export type DependencyCheck = {
  status?: StatusRendexRenderingHealthApi;
  latencyMs?: number;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dependencyCheckSchema: Schema<DependencyCheck> = s.object<DependencyCheck>(
  {
    status: s.optional(s.lazy(() => statusRendexRenderingHealthApiSchema)),
    latencyMs: s.optional(s.int()),
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
