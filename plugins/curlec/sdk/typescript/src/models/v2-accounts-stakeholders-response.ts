import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partnerStakeholderSchema, type PartnerStakeholder } from "./partner-stakeholder.js";

export type V2AccountsStakeholdersResponse = {
  entity?: string;
  count?: number;
  items?: PartnerStakeholder[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2AccountsStakeholdersResponseSchema: Schema<V2AccountsStakeholdersResponse> =
  s.object<V2AccountsStakeholdersResponse>(
    {
      entity: s.optional(s.string()),
      count: s.optional(s.int()),
      items: s.optional(s.array(s.lazy(() => partnerStakeholderSchema))),
    },
    { additionalProperties: s.json() },
  );
