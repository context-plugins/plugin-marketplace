import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentTurnSpecificationSchema, type AgentTurnSpecification } from "./agent-turn-specification.js";
import { userTurnSpecificationSchema, type UserTurnSpecification } from "./user-turn-specification.js";

export type TurnSpecification = {
  agentTurn?: AgentTurnSpecification;
  userTurn?: UserTurnSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const turnSpecificationSchema: Schema<TurnSpecification> = s.object<TurnSpecification>(
  {
    agentTurn: s.optional(s.lazy(() => agentTurnSpecificationSchema)),
    userTurn: s.optional(s.lazy(() => userTurnSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
