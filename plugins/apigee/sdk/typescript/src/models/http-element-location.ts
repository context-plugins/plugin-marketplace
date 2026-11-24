import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The location of the API key. The default value is QUERY. */
export const HttpElementLocation = {
  HttpElementLocationUnspecified: "HTTP_ELEMENT_LOCATION_UNSPECIFIED",
  Query: "QUERY",
  Header: "HEADER",
  Path: "PATH",
  Body: "BODY",
  Cookie: "COOKIE",
} as const;
export type HttpElementLocation =
  | (typeof HttpElementLocation)[keyof typeof HttpElementLocation]
  | (string & {});

export const httpElementLocationSchema: EnumSchema<HttpElementLocation> =
  s.enumOf<HttpElementLocation>(HttpElementLocation);
