import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventBridgeDataSourceConfig = {
  /**
   * The ARN of the event bus. For more information about event buses, see Amazon EventBridge event
   * buses.
   */
  eventBusArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventBridgeDataSourceConfigSchema: Schema<EventBridgeDataSourceConfig> =
  s.object<EventBridgeDataSourceConfig>(
    {
      eventBusArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
