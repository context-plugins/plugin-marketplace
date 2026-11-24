import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  routingConfigurationListItemSchema,
  type RoutingConfigurationListItem,
} from "./routing-configuration-list-item.js";

export type UpdateStateMachineAliasInput = {
  /** The Amazon Resource Name (ARN) of the state machine alias. */
  stateMachineAliasArn: string;
  /** A description of the state machine alias. */
  description?: string;
  /**
   * The routing configuration of the state machine alias. An array of RoutingConfig objects that
   * specifies up to two state machine versions that the alias starts executions for.
   */
  routingConfiguration?: RoutingConfigurationListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStateMachineAliasInputSchema: Schema<UpdateStateMachineAliasInput> =
  s.object<UpdateStateMachineAliasInput>(
    {
      stateMachineAliasArn: s.string(),
      description: s.optional(s.string()),
      routingConfiguration: s.optional(s.array(s.lazy(() => routingConfigurationListItemSchema))),
    },
    { additionalProperties: s.json() },
  );
