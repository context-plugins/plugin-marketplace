import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Where the act lands. Deliverd decides whether it is inside the organisation; only a workspace,
 * report, user, group or an address at one of the organisation's own domains is internal
 */
export type Destination = {
  /** workspace, report, user, group, email, url, channel, repository, … */
  type: string;
  /** A workspace slug or id, an email address, a URL, a channel id */
  id: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const destinationProperties: s.Shape<Destination> = {
  type: s.string(),
  id: s.string(),
  label: s.optional(s.string()),
};

export const destinationInternalSchema: Schema<Destination> = s.object<Destination>(destinationProperties, {
  additionalProperties: s.json(),
});

export const destinationSchema: Schema<Destination> = s.lazySchema(() =>
  s.object<Destination>(
    {
      ...destinationProperties,
      type: s.string().check(s.pattern("^[a-z][a-z0-9_]{1,39}$")),
      id: s.string().check(s.minLength(1), s.maxLength(300)),
      label: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
