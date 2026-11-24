import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating a project variable. */
export type CreateVariableRequest = {
  /** Display name for the variable. */
  name: string;
  /** Machine-readable key for the variable. */
  key: string;
  /** Value to store in the variable. */
  value: string;
  /** Set to true to mark the variable as a secret. @default false */
  isSecret?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createVariableRequestSchema: Schema<CreateVariableRequest> = s.object<CreateVariableRequest>(
  {
    name: s.string(),
    key: s.string(),
    value: s.string(),
    isSecret: s.defaulted(s.boolean(), false),
    _keysMap: {
      isSecret: "is_secret",
    },
  },
  { additionalProperties: s.json() },
);
