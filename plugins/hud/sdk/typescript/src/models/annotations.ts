import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audience1Schema, type Audience1 } from "./unions/audience1.js";
import { priorityInternalSchema, prioritySchema, type Priority } from "./unions/priority.js";

export type Annotations = {
  audience?: Audience1;
  priority?: Priority;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const annotationsProperties: s.Shape<Annotations> = {
  audience: s.optional(s.lazy(() => audience1Schema)),
  priority: s.optional(s.lazy(() => priorityInternalSchema)),
};

export const annotationsInternalSchema: Schema<Annotations> = s.object<Annotations>(annotationsProperties, {
  additionalProperties: s.json(),
});

export const annotationsSchema: Schema<Annotations> = s.lazySchema(() =>
  s.object<Annotations>(
    {
      ...annotationsProperties,
      priority: s.optional(s.lazy(() => prioritySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
