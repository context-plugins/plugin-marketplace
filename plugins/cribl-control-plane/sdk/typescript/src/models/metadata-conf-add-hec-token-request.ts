import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MetadataConfAddHecTokenRequest = {
  /** Key name for the metadata entry. */
  name: string;
  /** Value for the metadata entry. Can be a static string or a JavaScript expression. */
  value: string;
};

export const metadataConfAddHecTokenRequestSchema: Schema<MetadataConfAddHecTokenRequest> =
  s.object<MetadataConfAddHecTokenRequest>({
    name: s.string(),
    value: s.string(),
  });
