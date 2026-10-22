import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Certificate credentials for OAuth authentication. */
export type Certificate1 = {
  /** The certificate you registered as credentials for your app in the Azure portal */
  certificateName?: string;
};

export const certificate1Schema: Schema<Certificate1> = s.object<Certificate1>({
  certificateName: s.optional(s.string()),
});
