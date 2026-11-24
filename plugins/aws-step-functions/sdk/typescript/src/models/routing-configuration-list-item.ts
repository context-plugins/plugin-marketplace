import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RoutingConfigurationListItem = {
  /**
   * The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the
   * routing configuration. If you specify the ARN of a second version, it must belong to the same
   * state machine as the first version.
   */
  stateMachineVersionArn: string;
  /**
   * The percentage of traffic you want to route to a state machine version. The sum of the weights
   * in the routing configuration must be equal to 100.
   */
  weight: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routingConfigurationListItemSchema: Schema<RoutingConfigurationListItem> =
  s.object<RoutingConfigurationListItem>(
    {
      stateMachineVersionArn: s.string(),
      weight: s.int(),
    },
    { additionalProperties: s.json() },
  );
