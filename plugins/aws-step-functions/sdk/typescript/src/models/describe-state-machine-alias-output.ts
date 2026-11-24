import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  routingConfigurationListItemSchema,
  type RoutingConfigurationListItem,
} from "./routing-configuration-list-item.js";

export type DescribeStateMachineAliasOutput = {
  /** The Amazon Resource Name (ARN) of the state machine alias. */
  stateMachineAliasArn?: string;
  /** The name of the state machine alias. */
  name?: string;
  /** A description of the alias. */
  description?: string;
  /** The routing configuration of the alias. */
  routingConfiguration?: RoutingConfigurationListItem[];
  /** The date the state machine alias was created. */
  creationDate?: Date;
  /**
   * The date the state machine alias was last updated. For a newly created state machine, this is
   * the same as the creation date.
   */
  updateDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeStateMachineAliasOutputSchema: Schema<DescribeStateMachineAliasOutput> =
  s.object<DescribeStateMachineAliasOutput>(
    {
      stateMachineAliasArn: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      routingConfiguration: s.optional(s.array(s.lazy(() => routingConfigurationListItemSchema))),
      creationDate: s.optional(s.dateTime()),
      updateDate: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
