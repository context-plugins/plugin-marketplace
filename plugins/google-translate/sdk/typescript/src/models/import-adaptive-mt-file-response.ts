import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adaptiveMtFile2Schema, type AdaptiveMtFile2 } from "./adaptive-mt-file2.js";

/** The response for importing an AdaptiveMtFile */
export type ImportAdaptiveMtFileResponse = {
  /** Output only. The Adaptive MT file that was imported. */
  adaptiveMtFile?: AdaptiveMtFile2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importAdaptiveMtFileResponseSchema: Schema<ImportAdaptiveMtFileResponse> =
  s.object<ImportAdaptiveMtFileResponse>(
    {
      adaptiveMtFile: s.optional(s.lazy(() => adaptiveMtFile2Schema)),
    },
    { additionalProperties: s.json() },
  );
