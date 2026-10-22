import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessAccountResponseSchema, type BusinessAccountResponse } from "./business-account-response.js";

export type Embedded38 = {
  /** An array of business account objects. */
  businessAccounts?: BusinessAccountResponse[];
};

export const embedded38Schema: Schema<Embedded38> = s.object<Embedded38>({
  businessAccounts: s.optional(s.array(s.lazy(() => businessAccountResponseSchema))),
});
