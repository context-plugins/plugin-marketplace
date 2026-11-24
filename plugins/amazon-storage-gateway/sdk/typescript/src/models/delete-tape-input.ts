import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTapeInput = {
  /**
   * The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is
   * associated with. Use the ListGateways operation to return a list of gateways for your account
   * and Amazon Web Services Region.
   */
  gatewayArn: string;
  /** The Amazon Resource Name (ARN) of the virtual tape to delete. */
  tapeArn: string;
  /**
   * Set to TRUE to delete an archived tape that belongs to a custom pool with tape retention lock.
   * Only archived tapes with tape retention lock set to governance can be deleted. Archived tapes
   * with tape retention lock set to compliance can't be deleted.
   */
  bypassGovernanceRetention?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTapeInputSchema: Schema<DeleteTapeInput> = s.object<DeleteTapeInput>(
  {
    gatewayArn: s.string(),
    tapeArn: s.string(),
    bypassGovernanceRetention: s.optional(s.boolean()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      tapeArn: "TapeARN",
      bypassGovernanceRetention: "BypassGovernanceRetention",
    },
  },
  { additionalProperties: s.json() },
);
