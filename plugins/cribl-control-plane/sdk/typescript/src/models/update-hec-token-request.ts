import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metadataConfAddHecTokenRequestSchema,
  type MetadataConfAddHecTokenRequest,
} from "./metadata-conf-add-hec-token-request.js";

export type UpdateHecTokenRequest = {
  /** List of index names that the HEC token is allowed to write to. */
  allowedIndexesAtToken?: string[];
  /** Brief description for the HEC token. */
  description?: string;
  /** If <code>true</code>, the HEC token is enabled. Otherwise, <code>false</code>. */
  enabled?: boolean;
  /**
   * Array of key-value pairs to associate with the HEC token for tagging, categorization, or
   * providing additional context. Each item in the array is an object with a <code>name</code> and
   * a <code>value</code>.
   */
  metadata?: MetadataConfAddHecTokenRequest[];
};

export const updateHecTokenRequestSchema: Schema<UpdateHecTokenRequest> = s.object<UpdateHecTokenRequest>({
  allowedIndexesAtToken: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfAddHecTokenRequestSchema))),
});
