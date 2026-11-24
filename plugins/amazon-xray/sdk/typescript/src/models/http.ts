import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Http = {
  /** The request URL. */
  httpUrl?: string;
  /** The response status. */
  httpStatus?: number;
  /** The request method. */
  httpMethod?: string;
  /** The request's user agent string. */
  userAgent?: string;
  /** The IP address of the requestor. */
  clientIp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpSchema: Schema<Http> = s.object<Http>(
  {
    httpUrl: s.optional(s.string()),
    httpStatus: s.optional(s.int()),
    httpMethod: s.optional(s.string()),
    userAgent: s.optional(s.string()),
    clientIp: s.optional(s.string()),
    _keysMap: {
      httpUrl: "HttpURL",
      httpStatus: "HttpStatus",
      httpMethod: "HttpMethod",
      userAgent: "UserAgent",
      clientIp: "ClientIp",
    },
  },
  { additionalProperties: s.json() },
);
