import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsOrganizationServiceSettingsInternalSchema,
  awsOrganizationServiceSettingsSchema,
  type AwsOrganizationServiceSettings,
} from "./aws-organization-service-settings.js";

export type AwsOrganizationSettingsItem = {
  /** 12-digit account number of the AWS organization's management (payer) account. */
  managementAccountId: string;
  /**
   * AWS account used for commitment purchases for this AWS organization. Often a member account
   * under the AWS organization, but it may also be the management (payer) account itself. Null if
   * not configured.
   */
  purchaseAccountId: string | null;
  /**
   * Commitment settings for each commitment type activated on this AWS organization. Settings
   * values are independent per AWS organization and commitment type.
   */
  services: AwsOrganizationServiceSettings[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsOrganizationSettingsItemProperties: s.Shape<AwsOrganizationSettingsItem> = {
  managementAccountId: s.string(),
  purchaseAccountId: s.nullable(s.string()),
  services: s.array(s.lazy(() => awsOrganizationServiceSettingsInternalSchema)),
};

export const awsOrganizationSettingsItemInternalSchema: Schema<AwsOrganizationSettingsItem> =
  s.object<AwsOrganizationSettingsItem>(awsOrganizationSettingsItemProperties, {
    additionalProperties: s.json(),
  });

export const awsOrganizationSettingsItemSchema: Schema<AwsOrganizationSettingsItem> = s.lazySchema(() =>
  s.object<AwsOrganizationSettingsItem>(
    {
      ...awsOrganizationSettingsItemProperties,
      services: s.array(s.lazy(() => awsOrganizationServiceSettingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
