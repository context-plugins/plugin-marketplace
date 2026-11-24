import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksBulkResponse = {
  /** The number of links deleted. */
  deletedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksBulkResponseSchema: Schema<LinksBulkResponse> = s.object<LinksBulkResponse>(
  {
    deletedCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
