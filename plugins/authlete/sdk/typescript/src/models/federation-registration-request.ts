import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FederationRegistrationRequest = {
  /** The entity configuration of a relying party. */
  entityConfiguration?: string;
  /** The trust chain of a relying party. */
  trustChain?: string;
};

export const federationRegistrationRequestSchema: Schema<FederationRegistrationRequest> =
  s.object<FederationRegistrationRequest>({
    entityConfiguration: s.optional(s.string()),
    trustChain: s.optional(s.string()),
  });
