import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2TerminalsPairingCodesRequest = {
  /** The ID of the profile to pair the terminal with. */
  profileId: string;
};

export const v2TerminalsPairingCodesRequestSchema: Schema<V2TerminalsPairingCodesRequest> =
  s.object<V2TerminalsPairingCodesRequest>({
    profileId: s.string(),
  });
