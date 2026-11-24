import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Fields of a new service account. */
export type CreateServiceAccountRequest = {
  /**
   * Name, unique among the customer's service accounts. Leading or trailing whitespace returns
   * `400`.
   */
  name: string;
  /** Free-text description. */
  description?: string;
  /**
   * Platform permission names in camelCase, for example `cloudAnalyticsReadOnly`. An unknown name
   * returns `422`.
   */
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createServiceAccountRequestProperties: s.Shape<CreateServiceAccountRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  permissions: s.optional(s.array(s.string())),
};

export const createServiceAccountRequestInternalSchema: Schema<CreateServiceAccountRequest> =
  s.object<CreateServiceAccountRequest>(createServiceAccountRequestProperties, {
    additionalProperties: s.json(),
  });

export const createServiceAccountRequestSchema: Schema<CreateServiceAccountRequest> = s.lazySchema(() =>
  s.object<CreateServiceAccountRequest>(
    {
      ...createServiceAccountRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
