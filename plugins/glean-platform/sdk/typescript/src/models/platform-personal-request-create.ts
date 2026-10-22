import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** New request for the authenticated canonical user in the server's current UTC month. */
export type PlatformPersonalRequestCreate = {
  /**
   * Explicit opaque spend-client ID, retained without normalization and not inferred from the
   * authenticating OAuth application. Control characters and the synthetic __deleted_clients__
   * aggregation ID are not valid spend-client IDs.
   */
  clientId: string;
  /** Optional explanation of why the increase is needed. */
  businessJustification?: string;
};

export const platformPersonalRequestCreateSchema: Schema<PlatformPersonalRequestCreate> =
  s.object<PlatformPersonalRequestCreate>({
    clientId: s.string(),
    businessJustification: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      businessJustification: "business_justification",
    },
  });
