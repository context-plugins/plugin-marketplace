import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { headerOverrideSchema, type HeaderOverride } from "./header-override.js";
import { httpMethod2Schema, type HttpMethod2 } from "./http-method2.js";
import { oAuthToken1Schema, type OAuthToken1 } from "./oauth-token1.js";
import { oidcToken2Schema, type OidcToken2 } from "./oidc-token2.js";
import { uriOverride2Schema, type UriOverride2 } from "./uri-override2.js";

/** Modifies HTTP target for HTTP tasks. */
export type HttpTarget2 = {
  /**
   * If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token
   * is generated and attached as an `Authorization` header in the HTTP request. This type of
   * authorization can be used for many scenarios, including calling Cloud Run, or endpoints where
   * you intend to validate the token yourself. Note that both the service account email and the
   * audience MUST be specified when using the queue-level authorization override.
   */
  oidcToken?: OidcToken2;
  /** URI override. When specified, overrides the execution URI for all the tasks in the queue. */
  uriOverride?: UriOverride2;
  /**
   * If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) is
   * generated and attached as the `Authorization` header in the HTTP request. This type of
   * authorization should generally be used only when calling Google APIs hosted on
   * *.googleapis.com. Note that both the service account email and the scope MUST be specified when
   * using the queue-level authorization override.
   */
  oauthToken?: OAuthToken1;
  /**
   * The HTTP method to use for the request. When specified, it overrides HttpRequest for the task.
   * Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at
   * execution time.
   */
  httpMethod?: HttpMethod2;
  /**
   * HTTP target headers. This map contains the header field names and values. Headers will be set
   * when running the CreateTask and/or BufferTask. These headers represent a subset of the headers
   * that will be configured for the task's HTTP request. Some HTTP request headers will be ignored
   * or replaced. A partial list of headers that will be ignored or replaced is: * Several
   * predefined headers, prefixed with "X-CloudTasks-", can be used to define properties of the
   * task. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. *
   * Content-Length: This will be computed by Cloud Tasks. `Content-Type` won't be set by Cloud
   * Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For
   * example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`. The
   * default value is set to `"application/json"`. * User-Agent: This will be set to
   * `"Google-Cloud-Tasks"`. Headers which can have multiple values (according to RFC2616) can be
   * specified using comma-separated values. The size of the headers must be less than 80KB.
   * Queue-level headers to override headers of all the tasks in the queue. Do not put business
   * sensitive or personally identifying data in the HTTP Header Override Configuration or other
   * similar fields in accordance with Section 12 (Resource Fields) of the [Service Specific
   * Terms](https://cloud.google.com/terms/service-terms).
   */
  headerOverrides?: HeaderOverride[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpTarget2Schema: Schema<HttpTarget2> = s.object<HttpTarget2>(
  {
    oidcToken: s.optional(s.lazy(() => oidcToken2Schema)),
    uriOverride: s.optional(s.lazy(() => uriOverride2Schema)),
    oauthToken: s.optional(s.lazy(() => oAuthToken1Schema)),
    httpMethod: s.optional(s.lazy(() => httpMethod2Schema)),
    headerOverrides: s.optional(s.array(s.lazy(() => headerOverrideSchema))),
  },
  { additionalProperties: s.json() },
);
