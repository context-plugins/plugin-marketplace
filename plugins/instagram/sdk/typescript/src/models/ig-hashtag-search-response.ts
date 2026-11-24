import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";

export type IgHashtagSearchResponse = {
  data?: Datum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const igHashtagSearchResponseSchema: Schema<IgHashtagSearchResponse> =
  s.object<IgHashtagSearchResponse>(
    {
      data: s.optional(s.array(s.lazy(() => datumSchema))),
    },
    { additionalProperties: s.json() },
  );
