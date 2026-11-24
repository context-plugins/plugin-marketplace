import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item41 = {
  title: string;
  /** @default "URL" */
  type?: "URL";
  payload?: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const item41Properties: s.Shape<Item41> = {
  title: s.string(),
  type: s.defaulted(s.literal("URL"), "URL"),
  payload: s.optional(s.string()),
  url: s.string(),
};

export const item41InternalSchema: Schema<Item41> = s.object<Item41>(item41Properties, {
  additionalProperties: s.json(),
});

export const item41Schema: Schema<Item41> = s.lazySchema(() =>
  s.object<Item41>(
    {
      ...item41Properties,
      title: s.string().check(s.minLength(1)),
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
