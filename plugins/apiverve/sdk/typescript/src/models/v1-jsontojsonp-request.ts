import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1JsontojsonpRequest = {
  /**
   * The JSON data you want converted into JSONP format. Send it as an object or as a JSON-encoded
   * string.
   */
  json: string;
  /**
   * The callback function name to wrap the JSON data. Must be a JavaScript identifier, optionally
   * dotted (e.g. myCallback or window.myCallback).
   */
  callback?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JsontojsonpRequestSchema: Schema<V1JsontojsonpRequest> = s.object<V1JsontojsonpRequest>(
  {
    json: s.string(),
    callback: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
