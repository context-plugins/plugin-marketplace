import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceInformation = {
  addresses?: string[];
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceInformationSchema: Schema<ResourceInformation> = s.object<ResourceInformation>(
  {
    addresses: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
