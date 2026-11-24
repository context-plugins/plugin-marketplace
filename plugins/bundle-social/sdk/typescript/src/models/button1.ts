import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button1 = {
  id: string;
  /** @default "URL" */
  type?: "URL";
  label: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button1Properties: s.Shape<Button1> = {
  id: s.string(),
  type: s.defaulted(s.literal("URL"), "URL"),
  label: s.string(),
  url: s.string(),
};

export const button1InternalSchema: Schema<Button1> = s.object<Button1>(button1Properties, {
  additionalProperties: s.json(),
});

export const button1Schema: Schema<Button1> = s.lazySchema(() =>
  s.object<Button1>(
    {
      ...button1Properties,
      id: s.string().check(s.minLength(1), s.maxLength(36)),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
