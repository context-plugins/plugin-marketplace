import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sharedPayerAccountMappingSchema,
  type SharedPayerAccountMapping,
} from "./shared-payer-account-mapping.js";

export type SharedPayerAccountMappingList = {
  items?: SharedPayerAccountMapping[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerAccountMappingListSchema: Schema<SharedPayerAccountMappingList> =
  s.object<SharedPayerAccountMappingList>(
    {
      items: s.optional(s.array(s.lazy(() => sharedPayerAccountMappingSchema))),
    },
    { additionalProperties: s.json() },
  );
