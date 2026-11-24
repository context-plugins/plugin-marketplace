import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instrumentDataSchema, type InstrumentData } from "./instrument-data.js";
import { searchMetaData2Schema, type SearchMetaData2 } from "./search-meta-data2.js";
import { statusSchema, type Status } from "./status.js";

export type SearchInstrumentResponse = {
  status?: Status;
  /** Response data for search instrument request */
  data?: InstrumentData[];
  /** Meta data for search instrument response */
  metaData?: SearchMetaData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchInstrumentResponseSchema: Schema<SearchInstrumentResponse> =
  s.object<SearchInstrumentResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => instrumentDataSchema))),
      metaData: s.optional(s.lazy(() => searchMetaData2Schema)),
      _keysMap: {
        metaData: "meta_data",
      },
    },
    { additionalProperties: s.json() },
  );
