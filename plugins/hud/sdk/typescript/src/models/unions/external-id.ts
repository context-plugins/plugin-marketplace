import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Identity of the environment in the system it is imported from, as `<system>:<id>`, e.g.
 * `harbor:hello-world`
 */
export type ExternalId = string;

export const externalIdInternalSchema: Schema<ExternalId> = s.of<ExternalId>(s.union([s.string()]));

export const externalIdSchema: Schema<ExternalId> = s.lazySchema(() =>
  s.of<ExternalId>(s.union([s.string().check(s.maxLength(255))])),
);
