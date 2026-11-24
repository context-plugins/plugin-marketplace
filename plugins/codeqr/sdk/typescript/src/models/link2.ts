import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Link2 = {
  /** The unique ID of the short link. */
  id: string;
  /**
   * The domain of the short link. If not provided, the main domain of the project will be used (or
   * `codeqr.link` if the project has no domains).
   */
  domain: string;
  /** The slug of the short link. If not provided, a random 7-character slug will be generated. */
  key: string;
  /**
   * The complete URL of the short link, including the https protocol (for example,
   * `https://codeqr.link/try`).
   */
  shortLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const link2Properties: s.Shape<Link2> = {
  id: s.string(),
  domain: s.string(),
  key: s.string(),
  shortLink: s.optional(s.string()),
};

export const link2InternalSchema: Schema<Link2> = s.object<Link2>(link2Properties, {
  additionalProperties: s.json(),
});

export const link2Schema: Schema<Link2> = s.lazySchema(() =>
  s.object<Link2>(
    {
      ...link2Properties,
      shortLink: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
