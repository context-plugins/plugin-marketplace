import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The location of the argument in a tool HTTP request. 'body' is used for JSON data in the POST
 * request body. 'form' is used for form data in the POST request body. 'path' is used for URL path
 * parameters. 'query' is used for query parameters in the URL.
 */
export const ToolArgumentLocation = {
  Body: "body",
  Form: "form",
  Path: "path",
  Query: "query",
} as const;
export type ToolArgumentLocation =
  | (typeof ToolArgumentLocation)[keyof typeof ToolArgumentLocation]
  | (string & {});

export const toolArgumentLocationSchema: EnumSchema<ToolArgumentLocation> =
  s.enumOf<ToolArgumentLocation>(ToolArgumentLocation);
