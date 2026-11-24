import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TyposquattingDomain = {
  domainName?: string;
  createDate?: string;
  expiryDate?: string;
  lastSeen?: string;
  isDropped?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const typosquattingDomainSchema: Schema<TyposquattingDomain> = s.object<TyposquattingDomain>(
  {
    domainName: s.optional(s.string()),
    createDate: s.optional(s.string()),
    expiryDate: s.optional(s.string()),
    lastSeen: s.optional(s.string()),
    isDropped: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
