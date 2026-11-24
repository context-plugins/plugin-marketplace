import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Respondent = {
  id: string;
  externalId: string;
  email?: string | null;
  name?: string | null;
  traits?: Record<string, unknown> | null;
  verified: boolean;
  createdAt: Date;
  lastSeenAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const respondentSchema: Schema<Respondent> = s.object<Respondent>(
  {
    id: s.string(),
    externalId: s.string(),
    email: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    traits: s.optionalNullable(s.record(s.string(), s.unknown())),
    verified: s.boolean(),
    createdAt: s.dateTime(),
    lastSeenAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
