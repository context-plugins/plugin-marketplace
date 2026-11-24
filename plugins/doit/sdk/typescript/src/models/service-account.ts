import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A non-human identity owned by a customer. Its API tokens authenticate with exactly the
 * permissions listed here.
 */
export type ServiceAccount = {
  /** Service account ID. `null` only on a dry-run create. */
  id: string | null;
  /** ID of the customer that owns the service account. */
  customerId: string;
  /** Name, unique among the customer's service accounts. */
  name: string;
  /** Free-text description. */
  description: string;
  /** Platform permission names in camelCase, as shown in the DoiT console role editor. */
  permissions: string[];
  /**
   * Display name of the user who created the service account. `null` when unknown or when the
   * service account was created with a service account token.
   */
  createdBy: string | null;
  /**
   * Email of the user who created the service account. `null` when unknown or when the service
   * account was created with a service account token.
   */
  createdByEmail: string | null;
  /**
   * ID of the user who created the service account. `null` when unknown or when the service account
   * was created with a service account token.
   */
  createdByUserId: string | null;
  /** When the service account was created. */
  createTime: Date | null;
  /** When the service account was last changed. */
  updateTime: Date | null;
  /** Current version of the service account. Send it in `If-Match` to update or delete. */
  etag: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceAccountSchema: Schema<ServiceAccount> = s.object<ServiceAccount>(
  {
    id: s.nullable(s.string()),
    customerId: s.string(),
    name: s.string(),
    description: s.string(),
    permissions: s.array(s.string()),
    createdBy: s.nullable(s.string()),
    createdByEmail: s.nullable(s.string()),
    createdByUserId: s.nullable(s.string()),
    createTime: s.nullable(s.dateTime()),
    updateTime: s.nullable(s.dateTime()),
    etag: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
