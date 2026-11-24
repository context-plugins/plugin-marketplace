import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AccessSchema,
  type GoogleCloudApigeeV1Access,
} from "./google-cloud-apigee-v1-access.js";
import {
  googleCloudApigeeV1Properties1Schema,
  type GoogleCloudApigeeV1Properties1,
} from "./google-cloud-apigee-v1-properties1.js";
import {
  googleCloudApigeeV1PropertySchema,
  type GoogleCloudApigeeV1Property,
} from "./google-cloud-apigee-v1-property.js";

/**
 * Result is short for "action result", could be different types identified by "action_result"
 * field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list
 * of properties. For example, the contents could be virtual host info, state change result, or
 * execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a
 * http request. Contains headers, request URI and http methods type.Required fields : headers, uri,
 * verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http
 * status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of
 * a http error message. Contains detail error message, reason phrase and status code. Required
 * fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access
 * actions, can be Get, Set and Remove. Required fields : accessList
 */
export type GoogleCloudApigeeV1Result = {
  /** HTTP response phrase */
  reasonPhrase?: string;
  /**
   * Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example,
   * `"timestamp" : "12-08-19 00:31:59:960"`
   */
  timestamp?: string;
  /** The relative path of the api proxy. for example, `"uRI" : "/iloveapis"` */
  uRi?: string;
  /** HTTP method verb */
  verb?: string;
  /**
   * Error message content. for example, "content" : "{\"fault\":{\"faultstring\":\"API timed
   * out\",\"detail\":{\"errorcode\":\"flow.APITimedOut\"}}}"
   */
  content?: string;
  /** A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove. */
  accessList?: GoogleCloudApigeeV1Access[];
  /** Name value pairs used for DebugInfo ActionResult. */
  properties?: GoogleCloudApigeeV1Properties1;
  /** HTTP response code */
  statusCode?: string;
  /**
   * A list of HTTP headers. for example, '"headers" : [ { "name" : "Content-Length", "value" : "83"
   * }, { "name" : "Content-Type", "value" : "application/json" } ]'
   */
  headers?: GoogleCloudApigeeV1Property[];
  /**
   * Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage,
   * ErrorMessage, VariableAccess
   */
  actionResult?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ResultSchema: Schema<GoogleCloudApigeeV1Result> =
  s.object<GoogleCloudApigeeV1Result>(
    {
      reasonPhrase: s.optional(s.string()),
      timestamp: s.optional(s.string()),
      uRi: s.optional(s.string()),
      verb: s.optional(s.string()),
      content: s.optional(s.string()),
      accessList: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AccessSchema))),
      properties: s.optional(s.lazy(() => googleCloudApigeeV1Properties1Schema)),
      statusCode: s.optional(s.string()),
      headers: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PropertySchema))),
      actionResult: s.optional(s.string()),
      _keysMap: {
        uRi: "uRI",
        actionResult: "ActionResult",
      },
    },
    { additionalProperties: s.json() },
  );
