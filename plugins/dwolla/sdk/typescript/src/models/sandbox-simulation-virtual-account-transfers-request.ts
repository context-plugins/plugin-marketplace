import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxSimulationVirtualTransferItemSchema,
  type SandboxSimulationVirtualTransferItem,
} from "./sandbox-simulation-virtual-transfer-item.js";

/**
 * Simulate Virtual Account Number (VAN) / external transfers in Sandbox. Up to 10 transfers per
 * request; transfers are created and processed immediately. Successful response is 202 Accepted.
 */
export type SandboxSimulationVirtualAccountTransfersRequest = {
  /** Must be set to virtual for VAN transfer simulation. @default "virtual" */
  type?: "virtual";
  /** Transfers to simulate (max 10 per request). */
  transfers: SandboxSimulationVirtualTransferItem[];
};

export const sandboxSimulationVirtualAccountTransfersRequestSchema: Schema<SandboxSimulationVirtualAccountTransfersRequest> =
  s.object<SandboxSimulationVirtualAccountTransfersRequest>({
    type: s.defaulted(s.literal("virtual"), "virtual"),
    transfers: s.array(s.lazy(() => sandboxSimulationVirtualTransferItemSchema)),
  });
