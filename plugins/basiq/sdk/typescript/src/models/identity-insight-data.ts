import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { identityMatchInternalSchema, identityMatchSchema, type IdentityMatch } from "./identity-match.js";

export type IdentityInsightData = {
  name?: IdentityMatch;
  phone?: IdentityMatch;
  email?: IdentityMatch;
  address?: IdentityMatch;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const identityInsightDataProperties: s.Shape<IdentityInsightData> = {
  name: s.optional(s.lazy(() => identityMatchInternalSchema)),
  phone: s.optional(s.lazy(() => identityMatchInternalSchema)),
  email: s.optional(s.lazy(() => identityMatchInternalSchema)),
  address: s.optional(s.lazy(() => identityMatchInternalSchema)),
};

export const identityInsightDataInternalSchema: Schema<IdentityInsightData> = s.object<IdentityInsightData>(
  identityInsightDataProperties,
  { additionalProperties: s.json() },
);

export const identityInsightDataSchema: Schema<IdentityInsightData> = s.lazySchema(() =>
  s.object<IdentityInsightData>(
    {
      ...identityInsightDataProperties,
      name: s.optional(s.lazy(() => identityMatchSchema)),
      phone: s.optional(s.lazy(() => identityMatchSchema)),
      email: s.optional(s.lazy(() => identityMatchSchema)),
      address: s.optional(s.lazy(() => identityMatchSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
