import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { latestVersionStatus1Schema, type LatestVersionStatus1 } from "./latest-version-status1.js";

export type EntityRecognizerSummary = {
  /** The name that you assigned the entity recognizer. */
  recognizerName?: string;
  /** The number of versions you created. */
  numberOfVersions?: number;
  /** The time that the latest entity recognizer version was submitted for processing. */
  latestVersionCreatedAt?: Date;
  /** The version name you assigned to the latest entity recognizer version. */
  latestVersionName?: string;
  /** Provides the status of the latest entity recognizer version. */
  latestVersionStatus?: LatestVersionStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerSummarySchema: Schema<EntityRecognizerSummary> =
  s.object<EntityRecognizerSummary>(
    {
      recognizerName: s.optional(s.string()),
      numberOfVersions: s.optional(s.int()),
      latestVersionCreatedAt: s.optional(s.dateTime()),
      latestVersionName: s.optional(s.string()),
      latestVersionStatus: s.optional(s.lazy(() => latestVersionStatus1Schema)),
      _keysMap: {
        recognizerName: "RecognizerName",
        numberOfVersions: "NumberOfVersions",
        latestVersionCreatedAt: "LatestVersionCreatedAt",
        latestVersionName: "LatestVersionName",
        latestVersionStatus: "LatestVersionStatus",
      },
    },
    { additionalProperties: s.json() },
  );
