import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for updating information of a Verified bank funding source */
export type UpdateVerifiedBank = {
  name: string;
};

export const updateVerifiedBankSchema: Schema<UpdateVerifiedBank> = s.object<UpdateVerifiedBank>({
  name: s.string(),
});
