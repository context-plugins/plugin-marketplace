import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SdkVersionRep = {
  /** The SDK name, or "Unknown" */
  sdk: string;
  /** The version number, or "Unknown" */
  version: string;
};

export const sdkVersionRepSchema: Schema<SdkVersionRep> = s.object<SdkVersionRep>({
  sdk: s.string(),
  version: s.string(),
});
