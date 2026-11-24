import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { argumentsSchema, type Arguments } from "./unions/arguments.js";
import { nameSchema, type Name } from "./unions/name.js";

export type ChoiceDeltaToolCallFunction = {
  arguments?: Arguments;
  name?: Name;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const choiceDeltaToolCallFunctionSchema: Schema<ChoiceDeltaToolCallFunction> =
  s.object<ChoiceDeltaToolCallFunction>(
    {
      arguments: s.optional(s.lazy(() => argumentsSchema)),
      name: s.optional(s.lazy(() => nameSchema)),
    },
    { additionalProperties: s.json() },
  );
