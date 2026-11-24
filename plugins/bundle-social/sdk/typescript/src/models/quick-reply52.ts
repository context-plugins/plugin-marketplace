import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QuickReply52 = {
  id?: string;
  label: string;
  payload: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const quickReply52Properties: s.Shape<QuickReply52> = {
  id: s.optional(s.string()),
  label: s.string(),
  payload: s.string(),
};

export const quickReply52InternalSchema: Schema<QuickReply52> = s.object<QuickReply52>(
  quickReply52Properties,
  { additionalProperties: s.json() },
);

export const quickReply52Schema: Schema<QuickReply52> = s.lazySchema(() =>
  s.object<QuickReply52>(
    {
      ...quickReply52Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      label: s.string().check(s.minLength(1), s.maxLength(20)),
      payload: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
