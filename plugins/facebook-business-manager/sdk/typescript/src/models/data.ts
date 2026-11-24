import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data = {
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataProperties: s.Shape<Data> = {
  url: s.optional(s.string()),
};

export const dataInternalSchema: Schema<Data> = s.object<Data>(dataProperties, {
  additionalProperties: s.json(),
});

export const dataSchema: Schema<Data> = s.lazySchema(() =>
  s.object<Data>(
    {
      ...dataProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
