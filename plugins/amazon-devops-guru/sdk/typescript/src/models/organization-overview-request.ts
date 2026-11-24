import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrganizationOverviewRequest = {
  /**
   * The start of the time range passed in. The start time granularity is at the day level. The
   * floor of the start time is used. Returned information occurred after this day.
   */
  fromTime: Date;
  /**
   * The end of the time range passed in. The start time granularity is at the day level. The floor
   * of the start time is used. Returned information occurred before this day. If this is not
   * specified, then the current day is used.
   */
  toTime?: Date;
  /** The ID of the Amazon Web Services account. */
  accountIds?: string[];
  /** The ID of the organizational unit. */
  organizationalUnitIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationOverviewRequestSchema: Schema<OrganizationOverviewRequest> =
  s.object<OrganizationOverviewRequest>(
    {
      fromTime: s.dateTime(),
      toTime: s.optional(s.dateTime()),
      accountIds: s.optional(s.array(s.string())),
      organizationalUnitIds: s.optional(s.array(s.string())),
      _keysMap: {
        fromTime: "FromTime",
        toTime: "ToTime",
        accountIds: "AccountIds",
        organizationalUnitIds: "OrganizationalUnitIds",
      },
    },
    { additionalProperties: s.json() },
  );
