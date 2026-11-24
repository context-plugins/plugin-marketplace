import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The standard media type for the LOA-CFA document. The only supported value is application/pdf.
 */
export const LoaContentType = {
  ApplicationPdf: "application/pdf",
} as const;
export type LoaContentType = (typeof LoaContentType)[keyof typeof LoaContentType] | (string & {});

export const loaContentTypeSchema: EnumSchema<LoaContentType> = s.enumOf<LoaContentType>(LoaContentType);
