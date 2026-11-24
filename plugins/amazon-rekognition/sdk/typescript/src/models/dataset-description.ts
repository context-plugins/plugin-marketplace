import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetStatsSchema, type DatasetStats } from "./dataset-stats.js";
import { statusMessageCodeSchema, type StatusMessageCode } from "./status-message-code.js";
import { statusSchema, type Status } from "./status.js";

export type DatasetDescription = {
  /** The Unix timestamp for the time and date that the dataset was created. */
  creationTimestamp?: Date;
  /** The Unix timestamp for the date and time that the dataset was last updated. */
  lastUpdatedTimestamp?: Date;
  /** The status of the dataset. */
  status?: Status;
  /** The status message for the dataset. */
  statusMessage?: string;
  /**
   * The status message code for the dataset operation. If a service error occurs, try the API call
   * again later. If a client error occurs, check the input parameters to the dataset API call that
   * failed.
   */
  statusMessageCode?: StatusMessageCode;
  datasetStats?: DatasetStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetDescriptionSchema: Schema<DatasetDescription> = s.object<DatasetDescription>(
  {
    creationTimestamp: s.optional(s.dateTime()),
    lastUpdatedTimestamp: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => statusSchema)),
    statusMessage: s.optional(s.string()),
    statusMessageCode: s.optional(s.lazy(() => statusMessageCodeSchema)),
    datasetStats: s.optional(s.lazy(() => datasetStatsSchema)),
    _keysMap: {
      creationTimestamp: "CreationTimestamp",
      lastUpdatedTimestamp: "LastUpdatedTimestamp",
      status: "Status",
      statusMessage: "StatusMessage",
      statusMessageCode: "StatusMessageCode",
      datasetStats: "DatasetStats",
    },
  },
  { additionalProperties: s.json() },
);
