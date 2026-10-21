import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";
import { links15Schema, type Links15 } from "./links15.js";

/**
 * Simulate a verification directive for a business Verified Customer in Sandbox. The customer must
 * be in `retry` or `document` status. After a successful call, retrieve the Customer resource; the
 * given `errorCode` appears under `_embedded.errors`. See Dwolla documentation for verification
 * directive meanings.
 */
export type SandboxSimulationCustomerVerificationRequest = {
  /**
   * Must be set to customer-verification for verification directive simulation.
   *
   * @default "customer-verification"
   */
  type?: "customer-verification";
  links: Links15;
  /** Verification directive to simulate for the linked customer. */
  errorCode: ErrorCode;
};

export const sandboxSimulationCustomerVerificationRequestSchema: Schema<SandboxSimulationCustomerVerificationRequest> =
  s.object<SandboxSimulationCustomerVerificationRequest>({
    type: s.defaulted(s.literal("customer-verification"), "customer-verification"),
    links: links15Schema,
    errorCode: errorCodeSchema,
    _keysMap: {
      links: "_links",
    },
  });
