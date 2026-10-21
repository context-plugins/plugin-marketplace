import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signatureSchema, type Signature } from "./signature.js";

export type Report2 = {
  feedId: string;
  feedVersion: number;
  reportTimestamp: number;
  values: Record<string, Record<string, unknown>>;
  inputManifestHash: string;
  computationHash: string;
  revision: number;
  signerSetId: string;
  signatures: Signature[];
};

export const report2Schema: Schema<Report2> = s.object<Report2>({
  feedId: s.string(),
  feedVersion: s.int(),
  reportTimestamp: s.float64(),
  values: s.record(s.string(), s.record(s.string(), s.unknown())),
  inputManifestHash: s.string(),
  computationHash: s.string(),
  revision: s.int(),
  signerSetId: s.string(),
  signatures: s.array(s.lazy(() => signatureSchema)),
  _keysMap: {
    feedId: "feed_id",
    feedVersion: "feed_version",
    reportTimestamp: "report_timestamp",
    inputManifestHash: "input_manifest_hash",
    computationHash: "computation_hash",
    signerSetId: "signer_set_id",
  },
});
