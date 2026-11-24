import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pendingApprovalSchema, type PendingApproval } from "./pending-approval.js";
import {
  versionDeliverdDevReportsApiSchema,
  type VersionDeliverdDevReportsApi,
} from "./version-deliverd-dev-reports-api.js";

export type ApiV1ReportsVersionsResponse2 = {
  versions: VersionDeliverdDevReportsApi[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  currentVersionId: string | null;
  /**
   * The newest version number, live or not. This is what `expectedVersion` compares against; after
   * a declined publish it is ahead of the current version.
   */
  latestVersion: number | null;
  /** The version waiting on an approver, if one is. */
  pendingApproval: PendingApproval | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsVersionsResponse2Schema: Schema<ApiV1ReportsVersionsResponse2> =
  s.object<ApiV1ReportsVersionsResponse2>(
    {
      versions: s.array(s.lazy(() => versionDeliverdDevReportsApiSchema)),
      nextCursor: s.nullable(s.string()),
      currentVersionId: s.nullable(s.string()),
      latestVersion: s.nullable(s.float64()),
      pendingApproval: s.nullable(s.lazy(() => pendingApprovalSchema)),
    },
    { additionalProperties: s.json() },
  );
