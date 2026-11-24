import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  userTurnInputSpecificationSchema,
  type UserTurnInputSpecification,
} from "./user-turn-input-specification.js";
import {
  userTurnOutputSpecificationSchema,
  type UserTurnOutputSpecification,
} from "./user-turn-output-specification.js";

export type UserTurnSpecification = {
  input: UserTurnInputSpecification;
  expected: UserTurnOutputSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTurnSpecificationSchema: Schema<UserTurnSpecification> = s.object<UserTurnSpecification>(
  {
    input: userTurnInputSpecificationSchema,
    expected: userTurnOutputSpecificationSchema,
  },
  { additionalProperties: s.json() },
);
