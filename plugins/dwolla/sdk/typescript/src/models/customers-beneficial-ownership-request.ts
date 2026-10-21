import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomersBeneficialOwnershipRequest = {
  status: string;
};

export const customersBeneficialOwnershipRequestSchema: Schema<CustomersBeneficialOwnershipRequest> =
  s.object<CustomersBeneficialOwnershipRequest>({
    status: s.string(),
  });
