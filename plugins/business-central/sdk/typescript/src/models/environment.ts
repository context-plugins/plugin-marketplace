import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";
import { type2Schema, type Type2 } from "./type2.js";
import { versionDetailsSchema, type VersionDetails } from "./version-details.js";

export type Environment = {
  /** Display name of the environment */
  friendlyName?: string;
  /** Environment type */
  type?: Type2;
  /** Environment name, unique within an application family */
  name?: string;
  /** Country/region code where the environment is deployed */
  countryCode?: string;
  /** Family of the environment application */
  applicationFamily?: string;
  /** Microsoft Entra tenant ID that owns the environment */
  aadTenantId?: string;
  /** Current status of the environment */
  status?: Status1;
  /** URL to log into the environment */
  webClientLoginUrl?: string;
  /** URL to access the environment service API */
  webServiceUrl?: string;
  /** Azure region where the database is stored */
  locationName?: string;
  /** Azure geo where the database is stored */
  geoName?: string;
  /** Logical ring group name (e.g., Prod, Preview) */
  ringName?: string;
  /** Application Insights instrumentation key */
  appInsightsKey?: string;
  /** When the environment was soft deleted */
  softDeletedOn?: Date;
  /** When the environment will be permanently deleted */
  hardDeletePendingOn?: Date;
  /** Reason the environment was deleted */
  deleteReason?: string;
  /** Update cadence for installed AppSource apps */
  appSourceAppsUpdateCadence?: string;
  versionDetails?: VersionDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const environmentProperties: s.Shape<Environment> = {
  friendlyName: s.optional(s.string()),
  type: s.optional(s.lazy(() => type2Schema)),
  name: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  applicationFamily: s.optional(s.string()),
  aadTenantId: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1Schema)),
  webClientLoginUrl: s.optional(s.string()),
  webServiceUrl: s.optional(s.string()),
  locationName: s.optional(s.string()),
  geoName: s.optional(s.string()),
  ringName: s.optional(s.string()),
  appInsightsKey: s.optional(s.string()),
  softDeletedOn: s.optional(s.dateTime()),
  hardDeletePendingOn: s.optional(s.dateTime()),
  deleteReason: s.optional(s.string()),
  appSourceAppsUpdateCadence: s.optional(s.string()),
  versionDetails: s.optional(s.lazy(() => versionDetailsSchema)),
};

export const environmentInternalSchema: Schema<Environment> = s.object<Environment>(environmentProperties, {
  additionalProperties: s.json(),
});

export const environmentSchema: Schema<Environment> = s.lazySchema(() =>
  s.object<Environment>(
    {
      ...environmentProperties,
      webClientLoginUrl: s.optional(s.string().check(s.url())),
      webServiceUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
