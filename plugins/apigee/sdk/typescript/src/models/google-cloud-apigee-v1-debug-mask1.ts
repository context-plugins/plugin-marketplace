import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Debug mask that applies to all deployments in the environment. */
export type GoogleCloudApigeeV1DebugMask1 = {
  /**
   * List of JSON paths that specify the JSON elements to be filtered from JSON response message
   * payloads.
   */
  responseJsonPaths?: string[];
  /** Name of the debug mask. */
  name?: string;
  /**
   * List of JSON paths that specify the JSON elements to be filtered from JSON request message
   * payloads.
   */
  requestJsonPaths?: string[];
  /**
   * List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error
   * flows.
   */
  faultJsonPaths?: string[];
  /** List of variables that should be masked from the debug output. */
  variables?: string[];
  /**
   * List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.
   */
  faultXPaths?: string[];
  /**
   * List of XPaths that specify the XML elements to be filtered from XML response message payloads.
   */
  responseXPaths?: string[];
  /**
   * List of XPaths that specify the XML elements to be filtered from XML request message payloads.
   */
  requestXPaths?: string[];
  /** Map of namespaces to URIs. */
  namespaces?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DebugMask1Schema: Schema<GoogleCloudApigeeV1DebugMask1> =
  s.object<GoogleCloudApigeeV1DebugMask1>(
    {
      responseJsonPaths: s.optional(s.array(s.string())),
      name: s.optional(s.string()),
      requestJsonPaths: s.optional(s.array(s.string())),
      faultJsonPaths: s.optional(s.array(s.string())),
      variables: s.optional(s.array(s.string())),
      faultXPaths: s.optional(s.array(s.string())),
      responseXPaths: s.optional(s.array(s.string())),
      requestXPaths: s.optional(s.array(s.string())),
      namespaces: s.optional(s.record(s.string(), s.string())),
      _keysMap: {
        responseJsonPaths: "responseJSONPaths",
        requestJsonPaths: "requestJSONPaths",
        faultJsonPaths: "faultJSONPaths",
      },
    },
    { additionalProperties: s.json() },
  );
