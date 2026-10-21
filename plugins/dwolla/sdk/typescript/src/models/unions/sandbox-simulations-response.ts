import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  sandboxSimulationBankProcessingResponseSchema,
  type SandboxSimulationBankProcessingResponse,
} from "../sandbox-simulation-bank-processing-response.js";
import {
  sandboxSimulationCustomerVerificationResponseSchema,
  type SandboxSimulationCustomerVerificationResponse,
} from "../sandbox-simulation-customer-verification-response.js";

export type SandboxSimulationsResponse =
  | SandboxSimulationBankProcessingResponse
  | SandboxSimulationCustomerVerificationResponse;

export const sandboxSimulationsResponseSchema: Schema<SandboxSimulationsResponse> =
  s.of<SandboxSimulationsResponse>(
    s.union([
      s.lazy(() => sandboxSimulationBankProcessingResponseSchema),
      s.lazy(() => sandboxSimulationCustomerVerificationResponseSchema),
    ]),
  );
