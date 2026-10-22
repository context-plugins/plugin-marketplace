import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for removing a bank funding source */
export type RemoveBank = {
  removed: boolean;
};

export const removeBankSchema: Schema<RemoveBank> = s.object<RemoveBank>({
  removed: s.boolean(),
});
