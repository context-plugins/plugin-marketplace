import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceAccountSchema, type ServiceAccount } from "./service-account.js";

/** Service accounts owned by the authenticated customer. */
export type ServiceAccountsResponse = {
  items: ServiceAccount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceAccountsResponseSchema: Schema<ServiceAccountsResponse> =
  s.object<ServiceAccountsResponse>(
    {
      items: s.array(s.lazy(() => serviceAccountSchema)),
    },
    { additionalProperties: s.json() },
  );
