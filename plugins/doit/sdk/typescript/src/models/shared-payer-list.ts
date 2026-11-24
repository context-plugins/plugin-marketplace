import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sharedPayerSchema, type SharedPayer } from "./shared-payer.js";

export type SharedPayerList = {
  items?: SharedPayer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerListSchema: Schema<SharedPayerList> = s.object<SharedPayerList>(
  {
    items: s.optional(s.array(s.lazy(() => sharedPayerSchema))),
  },
  { additionalProperties: s.json() },
);
