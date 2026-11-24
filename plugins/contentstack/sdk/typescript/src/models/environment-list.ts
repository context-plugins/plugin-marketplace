import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentInternalSchema, environmentSchema, type Environment } from "./environment.js";

/** A list of deployment environments. */
export type EnvironmentList = {
  /** Array of environment objects. */
  environments?: Environment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const environmentListProperties: s.Shape<EnvironmentList> = {
  environments: s.optional(s.array(s.lazy(() => environmentInternalSchema))),
};

export const environmentListInternalSchema: Schema<EnvironmentList> = s.object<EnvironmentList>(
  environmentListProperties,
  { additionalProperties: s.json() },
);

export const environmentListSchema: Schema<EnvironmentList> = s.lazySchema(() =>
  s.object<EnvironmentList>(
    {
      ...environmentListProperties,
      environments: s.optional(s.array(s.lazy(() => environmentSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
