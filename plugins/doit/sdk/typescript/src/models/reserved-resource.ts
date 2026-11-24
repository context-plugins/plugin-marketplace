import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReservedResource = {
  amount: string;
  resourceKind: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reservedResourceSchema: Schema<ReservedResource> = s.object<ReservedResource>(
  {
    amount: s.string(),
    resourceKind: s.string(),
  },
  { additionalProperties: s.json() },
);
