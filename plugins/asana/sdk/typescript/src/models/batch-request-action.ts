import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";
import { optionsSchema, type Options } from "./options.js";

/** An action object for use in a batch request. */
export type BatchRequestAction = {
  /**
   * The path of the desired endpoint relative to the API’s base URL. Query parameters are not
   * accepted here; put them in `data` instead.
   */
  relativePath: string;
  /** The HTTP method you wish to emulate for the action. */
  method: Method;
  /**
   * For `GET` requests, this should be a map of query parameters you would have normally passed in
   * the URL. Options and pagination are not accepted here; put them in `options` instead. For
   * `POST`, `PATCH`, and `PUT` methods, this should be the content you would have normally put in
   * the data field of the body.
   */
  data?: Record<string, unknown>;
  /**
   * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action.
   * “Pretty” JSON output is not an available option on individual actions; if you want pretty
   * output, specify that option on the parent request.
   */
  options?: Options;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRequestActionSchema: Schema<BatchRequestAction> = s.object<BatchRequestAction>(
  {
    relativePath: s.string(),
    method: methodSchema,
    data: s.optional(s.record(s.string(), s.unknown())),
    options: s.optional(s.lazy(() => optionsSchema)),
    _keysMap: {
      relativePath: "relative_path",
    },
  },
  { additionalProperties: s.json() },
);
