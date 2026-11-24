import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Where it landed. Must be where it was authorised to */
export type Destination9 = {
  /** workspace, report, user, group, email, url, channel, repository, … */
  type: string;
  /** A workspace slug or id, an email address, a URL, a channel id */
  id: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const destination9Properties: s.Shape<Destination9> = {
  type: s.string(),
  id: s.string(),
  label: s.optional(s.string()),
};

export const destination9InternalSchema: Schema<Destination9> = s.object<Destination9>(
  destination9Properties,
  { additionalProperties: s.json() },
);

export const destination9Schema: Schema<Destination9> = s.lazySchema(() =>
  s.object<Destination9>(
    {
      ...destination9Properties,
      type: s.string().check(s.pattern("^[a-z][a-z0-9_]{1,39}$")),
      id: s.string().check(s.minLength(1), s.maxLength(300)),
      label: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
