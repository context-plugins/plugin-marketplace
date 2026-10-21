import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payloadIntegrity2Schema, type PayloadIntegrity2 } from "./unions/payload-integrity2.js";
import { signature12Schema, type Signature12 } from "./unions/signature12.js";

export type Checks = {
  signature: Signature12;
  payloadIntegrity: PayloadIntegrity2;
  signerSetId: string;
  signers: string[];
};

export const checksSchema: Schema<Checks> = s.object<Checks>({
  signature: signature12Schema,
  payloadIntegrity: payloadIntegrity2Schema,
  signerSetId: s.string(),
  signers: s.array(s.string()),
  _keysMap: {
    payloadIntegrity: "payload_integrity",
    signerSetId: "signer_set_id",
  },
});
