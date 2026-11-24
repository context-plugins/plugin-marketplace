import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionSchema, type Connection } from "./connection.js";
import { datastoreTableSchema, type DatastoreTable } from "./datastore-table.js";
import { globalVariableSchema, type GlobalVariable } from "./global-variable.js";

/**
 * Tenant-scoped resources the bundle needs; each is bound to a target-tenant resource at import.
 */
export type CloudflowBundleRequirements = {
  connections?: Connection[];
  datastoreTables?: DatastoreTable[];
  globalVariables?: GlobalVariable[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowBundleRequirementsProperties: s.Shape<CloudflowBundleRequirements> = {
  connections: s.optional(s.array(s.lazy(() => connectionSchema))),
  datastoreTables: s.optional(s.array(s.lazy(() => datastoreTableSchema))),
  globalVariables: s.optional(s.array(s.lazy(() => globalVariableSchema))),
};

export const cloudflowBundleRequirementsInternalSchema: Schema<CloudflowBundleRequirements> =
  s.object<CloudflowBundleRequirements>(cloudflowBundleRequirementsProperties, {
    additionalProperties: s.json(),
  });

export const cloudflowBundleRequirementsSchema: Schema<CloudflowBundleRequirements> = s.lazySchema(() =>
  s.object<CloudflowBundleRequirements>(
    {
      ...cloudflowBundleRequirementsProperties,
      connections: s.optional(s.array(s.lazy(() => connectionSchema)).check(s.maxLength(50))),
      datastoreTables: s.optional(s.array(s.lazy(() => datastoreTableSchema)).check(s.maxLength(50))),
      globalVariables: s.optional(s.array(s.lazy(() => globalVariableSchema)).check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
