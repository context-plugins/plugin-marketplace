import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Rule2 = {
  description?: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rule2Properties: s.Shape<Rule2> = {
  description: s.optional(s.string()),
  name: s.string(),
};

export const rule2InternalSchema: Schema<Rule2> = s.object<Rule2>(rule2Properties, {
  additionalProperties: s.json(),
});

export const rule2Schema: Schema<Rule2> = s.lazySchema(() =>
  s.object<Rule2>(
    {
      ...rule2Properties,
      description: s.optional(s.string().check(s.maxLength(400))),
      name: s.string().check(s.maxLength(80)),
    },
    { additionalProperties: s.json() },
  ),
);
