import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Button1261 = {
  id?: string;
  /** @default "URL" */
  type?: "URL";
  label: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const button1261Properties: s.Shape<Button1261> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("URL"), "URL"),
  label: s.string(),
  url: s.string(),
};

export const button1261InternalSchema: Schema<Button1261> = s.object<Button1261>(button1261Properties, {
  additionalProperties: s.json(),
});

export const button1261Schema: Schema<Button1261> = s.lazySchema(() =>
  s.object<Button1261>(
    {
      ...button1261Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
