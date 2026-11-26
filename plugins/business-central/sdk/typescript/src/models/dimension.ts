import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Dimension = {
  id?: string;
  code?: string;
  displayName?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dimensionProperties: s.Shape<Dimension> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const dimensionInternalSchema: Schema<Dimension> = s.object<Dimension>(dimensionProperties, {
  additionalProperties: s.json(),
});

export const dimensionSchema: Schema<Dimension> = s.lazySchema(() =>
  s.object<Dimension>(
    {
      ...dimensionProperties,
      code: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
