import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpgradeDocument = {
  recordId?: number;
  referenceDocumentSerial?: string | null;
  referenceDocumentType?: number;
};

export const upgradeDocumentSchema: Schema<UpgradeDocument> = s.object<UpgradeDocument>({
  recordId: s.optional(s.int()),
  referenceDocumentSerial: s.optionalNullable(s.string()),
  referenceDocumentType: s.optional(s.int()),
});
