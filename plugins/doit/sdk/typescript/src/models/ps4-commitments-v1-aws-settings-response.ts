import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsOrganizationSettingsItemInternalSchema,
  awsOrganizationSettingsItemSchema,
  type AwsOrganizationSettingsItem,
} from "./aws-organization-settings-item.js";

export type Ps4CommitmentsV1AwsSettingsResponse = {
  items: AwsOrganizationSettingsItem[];
  /** Opaque cursor for the next page. Absent when this is the last page. */
  pageToken?: string | null;
  /** Number of items returned in this page. */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1AwsSettingsResponseProperties: s.Shape<Ps4CommitmentsV1AwsSettingsResponse> = {
  items: s.array(s.lazy(() => awsOrganizationSettingsItemInternalSchema)),
  pageToken: s.optionalNullable(s.string()),
  rowCount: s.optional(s.int()),
};

export const ps4CommitmentsV1AwsSettingsResponseInternalSchema: Schema<Ps4CommitmentsV1AwsSettingsResponse> =
  s.object<Ps4CommitmentsV1AwsSettingsResponse>(ps4CommitmentsV1AwsSettingsResponseProperties, {
    additionalProperties: s.json(),
  });

export const ps4CommitmentsV1AwsSettingsResponseSchema: Schema<Ps4CommitmentsV1AwsSettingsResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1AwsSettingsResponse>(
      {
        ...ps4CommitmentsV1AwsSettingsResponseProperties,
        items: s.array(s.lazy(() => awsOrganizationSettingsItemSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
