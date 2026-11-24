import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loaContentTypeSchema, type LoaContentType } from "./loa-content-type.js";

export type Loa = {
  /** The binary contents of the LOA-CFA document. */
  loaContent?: string;
  /**
   * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
   */
  loaContentType?: LoaContentType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loaSchema: Schema<Loa> = s.object<Loa>(
  {
    loaContent: s.optional(s.string()),
    loaContentType: s.optional(s.lazy(() => loaContentTypeSchema)),
  },
  { additionalProperties: s.json() },
);
