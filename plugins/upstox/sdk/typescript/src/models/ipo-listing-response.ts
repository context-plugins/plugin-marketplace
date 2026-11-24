import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoListingDataSchema, type IpoListingData } from "./ipo-listing-data.js";
import { ipoMetaDataSchema, type IpoMetaData } from "./ipo-meta-data.js";
import { statusSchema, type Status } from "./status.js";

export type IpoListingResponse = {
  status?: Status;
  data?: IpoListingData[];
  metaData?: IpoMetaData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoListingResponseSchema: Schema<IpoListingResponse> = s.object<IpoListingResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => ipoListingDataSchema))),
    metaData: s.optional(s.lazy(() => ipoMetaDataSchema)),
    _keysMap: {
      metaData: "meta_data",
    },
  },
  { additionalProperties: s.json() },
);
