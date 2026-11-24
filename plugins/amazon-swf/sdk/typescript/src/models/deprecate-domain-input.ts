import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeprecateDomainInput = {
  /** The name of the domain to deprecate. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deprecateDomainInputSchema: Schema<DeprecateDomainInput> = s.object<DeprecateDomainInput>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
