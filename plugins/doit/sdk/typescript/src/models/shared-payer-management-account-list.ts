import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sharedPayerManagementAccountSchema,
  type SharedPayerManagementAccount,
} from "./shared-payer-management-account.js";

export type SharedPayerManagementAccountList = {
  items?: SharedPayerManagementAccount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharedPayerManagementAccountListSchema: Schema<SharedPayerManagementAccountList> =
  s.object<SharedPayerManagementAccountList>(
    {
      items: s.optional(s.array(s.lazy(() => sharedPayerManagementAccountSchema))),
    },
    { additionalProperties: s.json() },
  );
