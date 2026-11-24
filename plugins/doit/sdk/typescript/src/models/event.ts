import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { metricDoiTDataHubApiSchema, type MetricDoiTDataHubApi } from "./metric-doi-tdata-hub-api.js";

export type Event = {
  /**
   * The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z), underscore
   * (_), space, dash (-).
   */
  provider: string;
  /**
   * The event id. Must be unique within the dataset. If not set, a UUIDv4 will be generated at
   * ingestion time.
   */
  id?: string;
  dimensions?: Dimension[];
  /** The timestamp of the event in RFC3339 format. */
  time: Date;
  metrics?: MetricDoiTDataHubApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    provider: s.string(),
    id: s.optional(s.string()),
    dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
    time: s.dateTime(),
    metrics: s.optional(s.array(s.lazy(() => metricDoiTDataHubApiSchema))),
  },
  { additionalProperties: s.json() },
);
