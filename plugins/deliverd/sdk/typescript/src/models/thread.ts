import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Thread = {
  threadId: string;
  reportId: string;
  reportTitle: string;
  reportSlug: string;
  /** Who owns the report — filter on it to find your own */
  reportOwnerId: string | null;
  quote: string | null;
  author: string;
  authorType: string;
  messages: number;
  lastActivityAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threadSchema: Schema<Thread> = s.object<Thread>(
  {
    threadId: s.string(),
    reportId: s.string(),
    reportTitle: s.string(),
    reportSlug: s.string(),
    reportOwnerId: s.nullable(s.string()),
    quote: s.nullable(s.string()),
    author: s.string(),
    authorType: s.string(),
    messages: s.float64(),
    lastActivityAt: s.string(),
  },
  { additionalProperties: s.json() },
);
