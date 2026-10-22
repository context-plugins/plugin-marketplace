import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

/** One simulated external (VAN) transfer in a sandbox-simulations request. */
export type SandboxSimulationVirtualTransferItem = {
  /** Link wrapper for the destination funding source (Dwolla HAL-style single link). */
  link: Link;
  amount: TransferAmount;
};

export const sandboxSimulationVirtualTransferItemSchema: Schema<SandboxSimulationVirtualTransferItem> =
  s.object<SandboxSimulationVirtualTransferItem>({
    link: linkSchema,
    amount: transferAmountSchema,
    _keysMap: {
      link: "_link",
    },
  });
