import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reference = {
  resource: string;
  fields: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const referenceProperties: s.Shape<Reference> = {
  resource: s.string(),
  fields: s.array(s.string()),
};

export const referenceInternalSchema: Schema<Reference> = s.object<Reference>(referenceProperties, {
  additionalProperties: s.json(),
});

export const referenceSchema: Schema<Reference> = s.lazySchema(() =>
  s.object<Reference>(
    {
      ...referenceProperties,
      fields: s.array(s.string()).check(s.minLength(1), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
