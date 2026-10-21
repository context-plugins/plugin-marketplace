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

export type BeneficialOwnersRequest = CreateUsBeneficialOwner | CreateInternationalBeneficialOwner;

export const beneficialOwnersRequestSchema: Schema<BeneficialOwnersRequest> = s.of<BeneficialOwnersRequest>(
  s.union([
    s.lazy(() => createUsBeneficialOwnerSchema),
    s.lazy(() => createInternationalBeneficialOwnerSchema),
  ]),
);
