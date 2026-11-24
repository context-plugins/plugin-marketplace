import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudWatchLogsConfigurationSchema,
  type CloudWatchLogsConfiguration,
} from "./cloud-watch-logs-configuration.js";
import { destination2Schema, type Destination2 } from "./destination2.js";

export type UpdateTraceSegmentDestinationRequest = {
  /** The configured destination of trace segments. */
  destination?: Destination2;
  cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTraceSegmentDestinationRequestSchema: Schema<UpdateTraceSegmentDestinationRequest> =
  s.object<UpdateTraceSegmentDestinationRequest>(
    {
      destination: s.optional(s.lazy(() => destination2Schema)),
      cloudWatchLogsConfiguration: s.optional(s.lazy(() => cloudWatchLogsConfigurationSchema)),
      _keysMap: {
        destination: "Destination",
        cloudWatchLogsConfiguration: "CloudWatchLogsConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
