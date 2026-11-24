import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of the current session. Used at the pre-scoring and session creation steps.
 *   - `created` is returned when the request is approved and the customer is eligible to use Tabby
 *   - `rejected` means that there are no available products for a customer
 *   - `expired` and `approved` - used for specific type of integration, kindly ignore them if not
 *     communicated directly
 */
export const Status = {
  Created: "created",
  Rejected: "rejected",
  Expired: "expired",
  Approved: "approved",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
