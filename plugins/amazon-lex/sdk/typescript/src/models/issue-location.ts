import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IssueLocation = {
  /** The locale identifier where the issue was found. */
  botLocale?: string;
  /** The intent identifier where the issue was found, if applicable. */
  intentId?: string;
  /** The slot identifier where the issue was found, if applicable. */
  slotId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const issueLocationSchema: Schema<IssueLocation> = s.object<IssueLocation>(
  {
    botLocale: s.optional(s.string()),
    intentId: s.optional(s.string()),
    slotId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
