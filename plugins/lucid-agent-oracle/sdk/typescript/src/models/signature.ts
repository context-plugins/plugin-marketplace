import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Signature = {
  signer: string;
  sig: string;
};

export const signatureSchema: Schema<Signature> = s.object<Signature>({
  signer: s.string(),
  sig: s.string(),
});
