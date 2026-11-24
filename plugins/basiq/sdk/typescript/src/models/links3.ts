import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links3 = {
  /** Link to this specific insight */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const links3Properties: s.Shape<Links3> = {
  self: s.string(),
};

export const links3InternalSchema: Schema<Links3> = s.object<Links3>(links3Properties, {
  additionalProperties: s.json(),
});

export const links3Schema: Schema<Links3> = s.lazySchema(() =>
  s.object<Links3>(
    {
      ...links3Properties,
      self: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
