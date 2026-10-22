import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCode1Schema, type ErrorCode1 } from "./error-code1.js";
import { links16Schema, type Links16 } from "./links16.js";

/**
 * Response when simulating customer verification directives (200 OK). Echoes the simulated
 * `errorCode`; retrieve the Customer resource to inspect `_embedded.errors`.
 */
export type SandboxSimulationCustomerVerificationResponse = {
  links: Links16;
  /** Verification directive that was simulated. */
  errorCode: ErrorCode1;
};

export const sandboxSimulationCustomerVerificationResponseSchema: Schema<SandboxSimulationCustomerVerificationResponse> =
  s.object<SandboxSimulationCustomerVerificationResponse>({
    links: links16Schema,
    errorCode: errorCode1Schema,
    _keysMap: {
      links: "_links",
    },
  });
