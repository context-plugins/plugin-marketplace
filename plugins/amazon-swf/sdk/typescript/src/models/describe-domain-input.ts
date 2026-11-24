import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeDomainInput = {
  /** The name of the domain to describe. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDomainInputSchema: Schema<DescribeDomainInput> = s.object<DescribeDomainInput>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
