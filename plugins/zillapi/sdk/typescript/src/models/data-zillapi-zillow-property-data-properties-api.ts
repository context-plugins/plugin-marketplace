import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataZillapiZillowPropertyDataPropertiesApi = {
  agentName?: string | null;
  agentEmail?: string | null;
  agentPhoneNumber?: string | null;
  agentLicenseNumber?: string | null;
  brokerName?: string | null;
  brokerPhoneNumber?: string | null;
  attributionInfo?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataZillapiZillowPropertyDataPropertiesApiSchema: Schema<DataZillapiZillowPropertyDataPropertiesApi> =
  s.object<DataZillapiZillowPropertyDataPropertiesApi>(
    {
      agentName: s.optionalNullable(s.string()),
      agentEmail: s.optionalNullable(s.string()),
      agentPhoneNumber: s.optionalNullable(s.string()),
      agentLicenseNumber: s.optionalNullable(s.string()),
      brokerName: s.optionalNullable(s.string()),
      brokerPhoneNumber: s.optionalNullable(s.string()),
      attributionInfo: s.optionalNullable(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
