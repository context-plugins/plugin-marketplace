import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RunnerResourceClassRequest = {
  /** The resource class name in namespace/name format */
  resourceClass: string;
  /** A description of the resource class */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const runnerResourceClassRequestProperties: s.Shape<RunnerResourceClassRequest> = {
  resourceClass: s.string(),
  description: s.string(),
  _keysMap: {
    resourceClass: "resource_class",
  },
};

export const runnerResourceClassRequestInternalSchema: Schema<RunnerResourceClassRequest> =
  s.object<RunnerResourceClassRequest>(runnerResourceClassRequestProperties, {
    additionalProperties: s.json(),
  });

export const runnerResourceClassRequestSchema: Schema<RunnerResourceClassRequest> = s.lazySchema(() =>
  s.object<RunnerResourceClassRequest>(
    {
      ...runnerResourceClassRequestProperties,
      resourceClass: s.string().check(s.pattern("^[a-z0-9-]+/[a-z0-9-]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
