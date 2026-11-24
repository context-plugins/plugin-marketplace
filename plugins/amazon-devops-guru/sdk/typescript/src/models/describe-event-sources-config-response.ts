import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSourcesConfigSchema, type EventSourcesConfig } from "./event-sources-config.js";

export type DescribeEventSourcesConfigResponse = {
  eventSources?: EventSourcesConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEventSourcesConfigResponseSchema: Schema<DescribeEventSourcesConfigResponse> =
  s.object<DescribeEventSourcesConfigResponse>(
    {
      eventSources: s.optional(s.lazy(() => eventSourcesConfigSchema)),
      _keysMap: {
        eventSources: "EventSources",
      },
    },
    { additionalProperties: s.json() },
  );
