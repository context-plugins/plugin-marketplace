import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VciMetadataRequest = {
  /** The flag indicating whether the metadata is written in the pretty format or not. */
  pretty: boolean;
};

export const vciMetadataRequestSchema: Schema<VciMetadataRequest> = s.object<VciMetadataRequest>({
  pretty: s.boolean(),
});
