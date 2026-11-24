import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";

export type Warning = {
  code?: string;
  message?: string;
  platform?: Platform;
  docUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const warningProperties: s.Shape<Warning> = {
  code: s.optional(s.string()),
  message: s.optional(s.string()),
  platform: s.optional(s.lazy(() => platformSchema)),
  docUrl: s.optional(s.string()),
};

export const warningInternalSchema: Schema<Warning> = s.object<Warning>(warningProperties, {
  additionalProperties: s.json(),
});

export const warningSchema: Schema<Warning> = s.lazySchema(() =>
  s.object<Warning>(
    {
      ...warningProperties,
      docUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
