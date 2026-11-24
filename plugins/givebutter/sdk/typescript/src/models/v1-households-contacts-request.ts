import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1HouseholdsContactsRequest = {
  contactId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1HouseholdsContactsRequestSchema: Schema<V1HouseholdsContactsRequest> =
  s.object<V1HouseholdsContactsRequest>(
    {
      contactId: s.int(),
      _keysMap: {
        contactId: "contact_id",
      },
    },
    { additionalProperties: s.json() },
  );
