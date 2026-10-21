import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Pagination */
export const Pagination = {
  None: "none",
  ResponseBody: "response_body",
  ResponseHeader: "response_header",
  ResponseHeaderLink: "response_header_link",
  RequestOffset: "request_offset",
  RequestPage: "request_page",
} as const;
export type Pagination = (typeof Pagination)[keyof typeof Pagination] | (string & {});

export const paginationSchema: EnumSchema<Pagination> = s.enumOf<Pagination>(Pagination);
