import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { latestVersionStatusSchema, type LatestVersionStatus } from "./latest-version-status.js";

export type DocumentClassifierSummary = {
  /** The name that you assigned the document classifier. */
  documentClassifierName?: string;
  /** The number of versions you created. */
  numberOfVersions?: number;
  /** The time that the latest document classifier version was submitted for processing. */
  latestVersionCreatedAt?: Date;
  /** The version name you assigned to the latest document classifier version. */
  latestVersionName?: string;
  /** Provides the status of the latest document classifier version. */
  latestVersionStatus?: LatestVersionStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassifierSummarySchema: Schema<DocumentClassifierSummary> =
  s.object<DocumentClassifierSummary>(
    {
      documentClassifierName: s.optional(s.string()),
      numberOfVersions: s.optional(s.int()),
      latestVersionCreatedAt: s.optional(s.dateTime()),
      latestVersionName: s.optional(s.string()),
      latestVersionStatus: s.optional(s.lazy(() => latestVersionStatusSchema)),
      _keysMap: {
        documentClassifierName: "DocumentClassifierName",
        numberOfVersions: "NumberOfVersions",
        latestVersionCreatedAt: "LatestVersionCreatedAt",
        latestVersionName: "LatestVersionName",
        latestVersionStatus: "LatestVersionStatus",
      },
    },
    { additionalProperties: s.json() },
  );
