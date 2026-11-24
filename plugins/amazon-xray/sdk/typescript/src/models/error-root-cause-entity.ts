import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rootCauseExceptionSchema, type RootCauseException } from "./root-cause-exception.js";

export type ErrorRootCauseEntity = {
  /** The name of the entity. */
  name?: string;
  /** The types and messages of the exceptions. */
  exceptions?: RootCauseException[];
  /** A flag that denotes a remote subsegment. */
  remote?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorRootCauseEntitySchema: Schema<ErrorRootCauseEntity> = s.object<ErrorRootCauseEntity>(
  {
    name: s.optional(s.string()),
    exceptions: s.optional(s.array(s.lazy(() => rootCauseExceptionSchema))),
    remote: s.optional(s.boolean()),
    _keysMap: {
      name: "Name",
      exceptions: "Exceptions",
      remote: "Remote",
    },
  },
  { additionalProperties: s.json() },
);
