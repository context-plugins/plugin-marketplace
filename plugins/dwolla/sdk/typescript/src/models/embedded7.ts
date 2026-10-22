import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beneficialOwnerSchema, type BeneficialOwner } from "./beneficial-owner.js";

export type Embedded7 = {
  beneficialOwners?: BeneficialOwner[];
};

export const embedded7Schema: Schema<Embedded7> = s.object<Embedded7>({
  beneficialOwners: s.optional(s.array(s.lazy(() => beneficialOwnerSchema))),
  _keysMap: {
    beneficialOwners: "beneficial-owners",
  },
});
