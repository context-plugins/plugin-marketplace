import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UndeprecateDomainInput = {
  /** The name of the domain of the deprecated workflow type. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const undeprecateDomainInputSchema: Schema<UndeprecateDomainInput> = s.object<UndeprecateDomainInput>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
