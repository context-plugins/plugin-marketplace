import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClickLink = {
  clicks?: number;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clickLinkSchema: Schema<ClickLink> = s.object<ClickLink>(
  {
    clicks: s.optional(s.int()),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
