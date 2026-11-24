import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Journal = {
  id?: string;
  code?: string;
  displayName?: string;
  templateDisplayName?: string;
  lastModifiedDateTime?: Date;
  balancingAccountId?: string;
  balancingAccountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const journalProperties: s.Shape<Journal> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  templateDisplayName: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
  balancingAccountId: s.optional(s.string()),
  balancingAccountNumber: s.optional(s.string()),
};

export const journalInternalSchema: Schema<Journal> = s.object<Journal>(journalProperties, {
  additionalProperties: s.json(),
});

export const journalSchema: Schema<Journal> = s.lazySchema(() =>
  s.object<Journal>(
    {
      ...journalProperties,
      code: s.optional(s.string().check(s.maxLength(10))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      templateDisplayName: s.optional(s.string().check(s.maxLength(100))),
      balancingAccountNumber: s.optional(s.string().check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
