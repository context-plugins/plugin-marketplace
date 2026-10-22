import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HmacSignature = {
  headerName?: string;
  hmacSecretFormVariableKey?: string;
};

export const hmacSignatureSchema: Schema<HmacSignature> = s.object<HmacSignature>({
  headerName: s.optional(s.string()),
  hmacSecretFormVariableKey: s.optional(s.string()),
});
