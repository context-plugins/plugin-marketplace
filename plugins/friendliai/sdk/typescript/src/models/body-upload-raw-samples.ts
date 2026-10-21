import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BodyUploadRawSamples = {
  /** File to update samples. */
  file: Uint8Array;
};

export const bodyUploadRawSamplesSchema: Schema<BodyUploadRawSamples> = s.object<BodyUploadRawSamples>({
  file: s.bytes(),
});
