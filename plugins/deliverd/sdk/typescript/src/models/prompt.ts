import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Send this instead of steps to draft an approved prompt: words people and agents use, versioned
 * and approved like any playbook
 */
export type Prompt = {
  /**
   * The approved words. Put each input in as {input name}, e.g. Compare {previous contract} with
   * {renewal contract}
   */
  text: string;
  /** What it is not for, and how to check what it produces */
  limitations?: string;
  /** The team or department it is for, as people would filter by it */
  department?: string;
  /** What kind of task, such as Analyze, Create or Edit */
  taskType?: string;
  /** The language it is written in, such as en-GB */
  language?: string;
  /** The member who owns it and keeps it current; whoever drafts it when omitted */
  ownerEmail?: string;
  /** When it is next reviewed, YYYY-MM-DD; six months on when omitted */
  reviewDueOn?: string;
  /** Run as a playbook, a person reviews the output before it is used */
  checkOutput?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const promptProperties: s.Shape<Prompt> = {
  text: s.string(),
  limitations: s.optional(s.string()),
  department: s.optional(s.string()),
  taskType: s.optional(s.string()),
  language: s.optional(s.string()),
  ownerEmail: s.optional(s.string()),
  reviewDueOn: s.optional(s.dateOnly()),
  checkOutput: s.optional(s.boolean()),
};

export const promptInternalSchema: Schema<Prompt> = s.object<Prompt>(promptProperties, {
  additionalProperties: s.json(),
});

export const promptSchema: Schema<Prompt> = s.lazySchema(() =>
  s.object<Prompt>(
    {
      ...promptProperties,
      text: s.string().check(s.minLength(1), s.maxLength(8000)),
      limitations: s.optional(s.string().check(s.maxLength(2000))),
      department: s.optional(s.string().check(s.maxLength(120))),
      taskType: s.optional(s.string().check(s.maxLength(40))),
      language: s.optional(s.string().check(s.maxLength(20))),
      ownerEmail: s.optional(s.string().check(s.maxLength(320), s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
