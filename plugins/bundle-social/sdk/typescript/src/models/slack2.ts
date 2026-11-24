import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Slack2 = {
  id?: string | null;
  permalink?: string | null;
  channelId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slack2Schema: Schema<Slack2> = s.object<Slack2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    channelId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
