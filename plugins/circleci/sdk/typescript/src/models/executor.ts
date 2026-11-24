import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The executor configuration */
export type Executor = {
  /** The executor type */
  type?: string;
  /** The resource class */
  resourceClass?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executorSchema: Schema<Executor> = s.object<Executor>(
  {
    type: s.optional(s.string()),
    resourceClass: s.optional(s.string()),
    _keysMap: {
      resourceClass: "resource_class",
    },
  },
  { additionalProperties: s.json() },
);
