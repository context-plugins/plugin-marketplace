import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metadata = {
  paymentId?: string;
  note?: string;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  paymentId: s.optional(s.string()),
  note: s.optional(s.string()),
});
