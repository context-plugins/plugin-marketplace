import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Thread = {
  text?: string | null;
  uploadIds?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threadProperties: s.Shape<Thread> = {
  text: s.optionalNullable(s.string()),
  uploadIds: s.optionalNullable(s.array(s.string())),
};

export const threadInternalSchema: Schema<Thread> = s.object<Thread>(threadProperties, {
  additionalProperties: s.json(),
});

export const threadSchema: Schema<Thread> = s.lazySchema(() =>
  s.object<Thread>(
    {
      ...threadProperties,
      text: s.optionalNullable(s.string().check(s.maxLength(25000))),
    },
    { additionalProperties: s.json() },
  ),
);
