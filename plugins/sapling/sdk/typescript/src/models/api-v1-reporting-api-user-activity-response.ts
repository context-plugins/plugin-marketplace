import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeUsersSchema, type ActiveUsers } from "./active-users.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1ReportingApiUserActivityResponse = {
  activeUsers?: ActiveUsers;
  editsAccepted?: number;
  editsIgnored?: number;
  editsShown?: number;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportingApiUserActivityResponseSchema: Schema<ApiV1ReportingApiUserActivityResponse> =
  s.object<ApiV1ReportingApiUserActivityResponse>(
    {
      activeUsers: s.optional(s.lazy(() => activeUsersSchema)),
      editsAccepted: s.optional(s.int()),
      editsIgnored: s.optional(s.int()),
      editsShown: s.optional(s.int()),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        activeUsers: "active_users",
        editsAccepted: "edits_accepted",
        editsIgnored: "edits_ignored",
        editsShown: "edits_shown",
      },
    },
    { additionalProperties: s.json() },
  );
