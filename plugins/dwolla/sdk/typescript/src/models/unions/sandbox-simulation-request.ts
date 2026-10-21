import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  sandboxSimulationCustomerVerificationRequestSchema,
  type SandboxSimulationCustomerVerificationRequest,
} from "../sandbox-simulation-customer-verification-request.js";
import {
  sandboxSimulationVirtualAccountTransfersRequestSchema,
  type SandboxSimulationVirtualAccountTransfersRequest,
} from "../sandbox-simulation-virtual-account-transfers-request.js";

/**
 * Bank transfer processing (omit body or `{}`), VAN transfer simulation (`type` virtual +
 * transfers), or verification directive simulation (`type` customer-verification, customer link,
 * and errorCode). Typed bodies are mutually exclusive; use only an omitted body or `{}` for bank
 * processing.
 */
export type SandboxSimulationRequest =
  | SandboxSimulationVirtualAccountTransfersRequest
  | SandboxSimulationCustomerVerificationRequest
  | Record<string, unknown>;

export const sandboxSimulationRequestSchema: Schema<SandboxSimulationRequest> =
  s.of<SandboxSimulationRequest>(
    s.union([
      s.lazy(() => sandboxSimulationVirtualAccountTransfersRequestSchema),
      s.lazy(() => sandboxSimulationCustomerVerificationRequestSchema),
      s.record(s.string(), s.unknown()),
    ]),
  );
