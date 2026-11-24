import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeTapesInput = {
  gatewayArn: string;
  /**
   * Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you
   * want to describe. If this parameter is not specified, Tape gateway returns a description of all
   * virtual tapes associated with the specified gateway.
   */
  tapeArNs?: string[];
  /**
   * A marker value, obtained in a previous call to DescribeTapes. This marker indicates which page
   * of results to retrieve. If not specified, the first page of results is retrieved.
   */
  marker?: string;
  /**
   * Specifies that the number of virtual tapes described be limited to the specified number. Amazon
   * Web Services may impose its own limit, if this field is not set.
   */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTapesInputSchema: Schema<DescribeTapesInput> = s.object<DescribeTapesInput>(
  {
    gatewayArn: s.string(),
    tapeArNs: s.optional(s.array(s.string())),
    marker: s.optional(s.string()),
    limit: s.optional(s.int()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      tapeArNs: "TapeARNs",
      marker: "Marker",
      limit: "Limit",
    },
  },
  { additionalProperties: s.json() },
);
