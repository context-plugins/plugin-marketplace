import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsOrganizationSettingsInternalSchema,
  awsOrganizationSettingsSchema,
  type AwsOrganizationSettings,
} from "./aws-organization-settings.js";
import { service1Schema, type Service1 } from "./service1.js";

export type AwsOrganizationServiceSettings = {
  /** Commitment type these settings apply to. */
  service: Service1;
  /** Commitment settings for this commitment type. */
  settings: AwsOrganizationSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsOrganizationServiceSettingsProperties: s.Shape<AwsOrganizationServiceSettings> = {
  service: service1Schema,
  settings: awsOrganizationSettingsInternalSchema,
};

export const awsOrganizationServiceSettingsInternalSchema: Schema<AwsOrganizationServiceSettings> =
  s.object<AwsOrganizationServiceSettings>(awsOrganizationServiceSettingsProperties, {
    additionalProperties: s.json(),
  });

export const awsOrganizationServiceSettingsSchema: Schema<AwsOrganizationServiceSettings> = s.lazySchema(() =>
  s.object<AwsOrganizationServiceSettings>(
    {
      ...awsOrganizationServiceSettingsProperties,
      settings: awsOrganizationSettingsSchema,
    },
    { additionalProperties: s.json() },
  ),
);
