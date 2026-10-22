import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createInternationalBeneficialOwnerSchema,
  type CreateInternationalBeneficialOwner,
} from "../create-international-beneficial-owner.js";
import {
  createUsBeneficialOwnerSchema,
  type CreateUsBeneficialOwner,
} from "../create-us-beneficial-owner.js";

export type CustomersBeneficialOwnersRequest = CreateUsBeneficialOwner | CreateInternationalBeneficialOwner;

export const customersBeneficialOwnersRequestSchema: Schema<CustomersBeneficialOwnersRequest> =
  s.of<CustomersBeneficialOwnersRequest>(
    s.union([
      s.lazy(() => createUsBeneficialOwnerSchema),
      s.lazy(() => createInternationalBeneficialOwnerSchema),
    ]),
  );
