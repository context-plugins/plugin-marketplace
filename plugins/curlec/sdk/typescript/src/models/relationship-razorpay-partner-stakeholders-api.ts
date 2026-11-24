import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RelationshipRazorpayPartnerStakeholdersApi = {
  director?: boolean;
  executive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationshipRazorpayPartnerStakeholdersApiSchema: Schema<RelationshipRazorpayPartnerStakeholdersApi> =
  s.object<RelationshipRazorpayPartnerStakeholdersApi>(
    {
      director: s.optional(s.boolean()),
      executive: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
