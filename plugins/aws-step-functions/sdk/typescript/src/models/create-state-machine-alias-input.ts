import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  routingConfigurationListItemSchema,
  type RoutingConfigurationListItem,
} from "./routing-configuration-list-item.js";

export type CreateStateMachineAliasInput = {
  /** A description for the state machine alias. */
  description?: string;
  /**
   * The name of the state machine alias. To avoid conflict with version ARNs, don't use an integer
   * in the name of the alias.
   */
  name: string;
  /**
   * The routing configuration of a state machine alias. The routing configuration shifts execution
   * traffic between two state machine versions. routingConfiguration contains an array of
   * RoutingConfig objects that specify up to two state machine versions. Step Functions then
   * randomly choses which version to run an execution with based on the weight assigned to each
   * RoutingConfig.
   */
  routingConfiguration: RoutingConfigurationListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStateMachineAliasInputSchema: Schema<CreateStateMachineAliasInput> =
  s.object<CreateStateMachineAliasInput>(
    {
      description: s.optional(s.string()),
      name: s.string(),
      routingConfiguration: s.array(s.lazy(() => routingConfigurationListItemSchema)),
    },
    { additionalProperties: s.json() },
  );
