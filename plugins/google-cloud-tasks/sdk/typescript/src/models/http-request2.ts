import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { httpMethodEnumSchema, type HttpMethodEnum } from "./http-method-enum.js";
import { oAuthToken3Schema, type OAuthToken3 } from "./oauth-token3.js";
import { oidcToken3Schema, type OidcToken3 } from "./oidc-token3.js";

/** HTTP request that is sent to the worker. An HTTP task is a task that has HttpRequest set. */
export type HttpRequest2 = {
  /** The HTTP method to use for the request. The default is POST. */
  httpMethod?: HttpMethodEnum;
  /**
   * If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token
   * will be generated and attached as an `Authorization` header in the HTTP request. This type of
   * authorization can be used for many scenarios, including calling Cloud Run, or endpoints where
   * you intend to validate the token yourself.
   */
  oidcToken?: OidcToken3;
  /**
   * If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be
   * generated and attached as an `Authorization` header in the HTTP request. This type of
   * authorization should generally only be used when calling Google APIs hosted on
   * *.googleapis.com.
   */
  oauthToken?: OAuthToken3;
  /**
   * HTTP request headers. This map contains the header field names and values. Headers can be set
   * when the task is created. These headers represent a subset of the headers that will accompany
   * the task's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list
   * of headers that will be ignored or replaced is: * Host: This will be computed by Cloud Tasks
   * and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. *
   * User-Agent: This will be set to `"Google-Cloud-Tasks"`. * `X-Google-*`: Google use only. *
   * `X-AppEngine-*`: Google use only. `Content-Type` won't be set by Cloud Tasks. You can
   * explicitly set `Content-Type` to a media type when the task is created. For example,
   * `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`. Headers
   * which can have multiple values (according to RFC2616) can be specified using comma-separated
   * values. The size of the headers must be less than 80KB.
   */
  headers?: Record<string, string>;
  /**
   * Required. The full url path that the request will be sent to. This string must begin with
   * either "http://" or "https://". Some examples are: `http://acme.com` and
   * `https://acme.com/sales:8080`. Cloud Tasks will encode some characters for safety and
   * compatibility. The maximum allowed URL length is 2083 characters after encoding. The `Location`
   * header response from a redirect response [`300` - `399`] may be followed. The redirect is not
   * counted as a separate attempt.
   */
  url?: string;
  /**
   * HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It
   * is an error to set body on a task with an incompatible HttpMethod.
   */
  body?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpRequest2Schema: Schema<HttpRequest2> = s.object<HttpRequest2>(
  {
    httpMethod: s.optional(s.lazy(() => httpMethodEnumSchema)),
    oidcToken: s.optional(s.lazy(() => oidcToken3Schema)),
    oauthToken: s.optional(s.lazy(() => oAuthToken3Schema)),
    headers: s.optional(s.record(s.string(), s.string())),
    url: s.optional(s.string()),
    body: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
