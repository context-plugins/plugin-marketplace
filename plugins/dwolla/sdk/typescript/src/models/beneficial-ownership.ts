import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links2Schema, type Links2 } from "./links2.js";
import { status5Schema, type Status5 } from "./status5.js";

export type BeneficialOwnership = {
  links: Links2;
  status: Status5;
};

export const beneficialOwnershipSchema: Schema<BeneficialOwnership> = s.object<BeneficialOwnership>({
  links: links2Schema,
  status: status5Schema,
  _keysMap: {
    links: "_links",
  },
});
