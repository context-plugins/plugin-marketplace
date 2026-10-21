import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Personal request for the authenticated user and specified client. */
export type PlatformPersonalRequestCreate1 = {
  /**
   * Explicit opaque spend-client ID, retained without normalization and not inferred from the
   * authenticating OAuth application. Control characters and the synthetic __deleted_clients__
   * aggregation ID are not valid spend-client IDs.
   */
  clientId: string;
  /** Optional explanation of why the increase is needed. */
  businessJustification?: string;
};

export const platformPersonalRequestCreate1Schema: Schema<PlatformPersonalRequestCreate1> =
  s.object<PlatformPersonalRequestCreate1>({
    clientId: s.string(),
    businessJustification: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      businessJustification: "business_justification",
    },
  });
