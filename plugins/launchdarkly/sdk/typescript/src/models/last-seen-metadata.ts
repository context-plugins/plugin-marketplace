import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastSeenMetadata = {
  /** The ID of the token used in the member's last session */
  tokenId?: string;
};

export const lastSeenMetadataSchema: Schema<LastSeenMetadata> = s.object<LastSeenMetadata>({
  tokenId: s.optional(s.string()),
});
