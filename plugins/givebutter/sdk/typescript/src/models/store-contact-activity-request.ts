import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeGivebutterApiDocumentationContactActivitiesApiSchema,
  type TypeGivebutterApiDocumentationContactActivitiesApi,
} from "./type-givebutter-api-documentation-contact-activities-api.js";

export type StoreContactActivityRequest = {
  type: TypeGivebutterApiDocumentationContactActivitiesApi;
  note?: string | null;
  subject?: string | null;
  occurredAt?: Date | null;
  timezone?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storeContactActivityRequestProperties: s.Shape<StoreContactActivityRequest> = {
  type: typeGivebutterApiDocumentationContactActivitiesApiSchema,
  note: s.optionalNullable(s.string()),
  subject: s.optionalNullable(s.string()),
  occurredAt: s.optionalNullable(s.dateTime()),
  timezone: s.optionalNullable(s.string()),
  _keysMap: {
    occurredAt: "occurred_at",
  },
};

export const storeContactActivityRequestInternalSchema: Schema<StoreContactActivityRequest> =
  s.object<StoreContactActivityRequest>(storeContactActivityRequestProperties, {
    additionalProperties: s.json(),
  });

export const storeContactActivityRequestSchema: Schema<StoreContactActivityRequest> = s.lazySchema(() =>
  s.object<StoreContactActivityRequest>(
    {
      ...storeContactActivityRequestProperties,
      subject: s.optionalNullable(s.string().check(s.maxLength(255))),
      timezone: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
