import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { functionConfigurationSchema, type FunctionConfiguration } from "./function-configuration.js";

export type ListFunctionsResponse = {
  /** A list of Function objects. */
  functions?: FunctionConfiguration[];
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to
   * return the next set of items in the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFunctionsResponseSchema: Schema<ListFunctionsResponse> = s.object<ListFunctionsResponse>(
  {
    functions: s.optional(s.array(s.lazy(() => functionConfigurationSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
