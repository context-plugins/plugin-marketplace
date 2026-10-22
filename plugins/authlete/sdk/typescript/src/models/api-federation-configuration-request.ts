import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";

export type ApiFederationConfigurationRequest = {
  /**
   * The entity types for which the entity configuration is requested. When omitted or empty, it
   * defaults to `OPENID_PROVIDER` only (backward compatibility). Unsupported entity types are
   * ignored. `OPENID_CREDENTIAL_ISSUER` requires the Verifiable Credentials feature (Authlete
   * 3.0+).
   */
  entityTypes?: EntityType[];
};

export const apiFederationConfigurationRequestSchema: Schema<ApiFederationConfigurationRequest> =
  s.object<ApiFederationConfigurationRequest>({
    entityTypes: s.optional(s.array(s.lazy(() => entityTypeSchema))),
  });
