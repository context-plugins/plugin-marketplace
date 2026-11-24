import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountManagerListItemSchema, type AccountManagerListItem } from "./account-manager-list-item.js";

export type CustomersV1AccountTeamResponse = {
  accountManagers?: AccountManagerListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customersV1AccountTeamResponseSchema: Schema<CustomersV1AccountTeamResponse> =
  s.object<CustomersV1AccountTeamResponse>(
    {
      accountManagers: s.optional(s.array(s.lazy(() => accountManagerListItemSchema))),
    },
    { additionalProperties: s.json() },
  );
