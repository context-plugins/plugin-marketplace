import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JournalCreate = {
  code: string;
  displayName: string;
  templateDisplayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const journalCreateProperties: s.Shape<JournalCreate> = {
  code: s.string(),
  displayName: s.string(),
  templateDisplayName: s.optional(s.string()),
};

export const journalCreateInternalSchema: Schema<JournalCreate> = s.object<JournalCreate>(
  journalCreateProperties,
  { additionalProperties: s.json() },
);

export const journalCreateSchema: Schema<JournalCreate> = s.lazySchema(() =>
  s.object<JournalCreate>(
    {
      ...journalCreateProperties,
      code: s.string().check(s.maxLength(10)),
      displayName: s.string().check(s.maxLength(100)),
      templateDisplayName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
