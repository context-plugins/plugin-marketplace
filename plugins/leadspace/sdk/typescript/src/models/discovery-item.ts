import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discoveryAccountSchema, type DiscoveryAccount } from "./discovery-account.js";
import {
  discoveryContactCriteriaInternalSchema,
  discoveryContactCriteriaSchema,
  type DiscoveryContactCriteria,
} from "./discovery-contact-criteria.js";
import { limitsInternalSchema, limitsSchema, type Limits } from "./limits.js";
import { locationSchema, type Location } from "./location.js";
import { requiredResultsFieldsSchema, type RequiredResultsFields } from "./required-results-fields.js";

export type DiscoveryItem = {
  /** Either companyName or companyWebsite is mandatory */
  account?: DiscoveryAccount;
  contact?: DiscoveryContactCriteria;
  requiredResultsFields?: RequiredResultsFields;
  limits?: Limits;
  location?: Location;
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const discoveryItemProperties: s.Shape<DiscoveryItem> = {
  account: s.optional(s.lazy(() => discoveryAccountSchema)),
  contact: s.optional(s.lazy(() => discoveryContactCriteriaInternalSchema)),
  requiredResultsFields: s.optional(s.lazy(() => requiredResultsFieldsSchema)),
  limits: s.optional(s.lazy(() => limitsInternalSchema)),
  location: s.optional(s.lazy(() => locationSchema)),
  externalId: s.optional(s.string()),
  _keysMap: {
    externalId: "external_id",
  },
};

export const discoveryItemInternalSchema: Schema<DiscoveryItem> = s.object<DiscoveryItem>(
  discoveryItemProperties,
  { additionalProperties: s.json() },
);

export const discoveryItemSchema: Schema<DiscoveryItem> = s.lazySchema(() =>
  s.object<DiscoveryItem>(
    {
      ...discoveryItemProperties,
      contact: s.optional(s.lazy(() => discoveryContactCriteriaSchema)),
      limits: s.optional(s.lazy(() => limitsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
