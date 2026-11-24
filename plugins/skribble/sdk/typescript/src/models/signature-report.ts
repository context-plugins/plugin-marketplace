import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { headerInternalSchema, headerSchema, type Header } from "./header.js";
import { userListInternalSchema, userListSchema, type UserList } from "./user-list.js";

export type SignatureReport = {
  /** Metadata and status information about the signature request */
  header?: Header;
  /** List of users involved in the signature process */
  userList?: UserList[];
  error?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signatureReportProperties: s.Shape<SignatureReport> = {
  header: s.optional(s.lazy(() => headerInternalSchema)),
  userList: s.optional(s.array(s.lazy(() => userListInternalSchema))),
  error: s.optionalNullable(s.string()),
};

export const signatureReportInternalSchema: Schema<SignatureReport> = s.object<SignatureReport>(
  signatureReportProperties,
  { additionalProperties: s.json() },
);

export const signatureReportSchema: Schema<SignatureReport> = s.lazySchema(() =>
  s.object<SignatureReport>(
    {
      ...signatureReportProperties,
      header: s.optional(s.lazy(() => headerSchema)),
      userList: s.optional(s.array(s.lazy(() => userListSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
