import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Pagination type */
export const PaginationType = {
  None: "none",
  ResponseBody: "response_body",
  ResponseHeader: "response_header",
  ResponseHeaderLink: "response_header_link",
} as const;
export type PaginationType = (typeof PaginationType)[keyof typeof PaginationType] | (string & {});

export const paginationTypeSchema: EnumSchema<PaginationType> = s.enumOf<PaginationType>(PaginationType);
