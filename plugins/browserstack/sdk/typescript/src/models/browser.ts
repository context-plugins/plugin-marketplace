import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Browser = {
  os?: string;
  osVersion?: string;
  browser?: string;
  device?: string | null;
  browserVersion?: string | null;
  realMobile?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const browserSchema: Schema<Browser> = s.object<Browser>(
  {
    os: s.optional(s.string()),
    osVersion: s.optional(s.string()),
    browser: s.optional(s.string()),
    device: s.optionalNullable(s.string()),
    browserVersion: s.optionalNullable(s.string()),
    realMobile: s.optional(s.boolean()),
    _keysMap: {
      osVersion: "os_version",
      browserVersion: "browser_version",
      realMobile: "real_mobile",
    },
  },
  { additionalProperties: s.json() },
);
