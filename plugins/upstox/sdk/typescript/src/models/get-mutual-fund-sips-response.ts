import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mutualFundMetaData2Schema, type MutualFundMetaData2 } from "./mutual-fund-meta-data2.js";
import { mutualFundSipDataSchema, type MutualFundSipData } from "./mutual-fund-sip-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetMutualFundSipsResponse = {
  status?: Status;
  /** Open SIP orders (active and paused). */
  data?: MutualFundSipData[];
  /** Meta data for mutual fund sips */
  metaData?: MutualFundMetaData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMutualFundSipsResponseSchema: Schema<GetMutualFundSipsResponse> =
  s.object<GetMutualFundSipsResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => mutualFundSipDataSchema))),
      metaData: s.optional(s.lazy(() => mutualFundMetaData2Schema)),
      _keysMap: {
        metaData: "meta_data",
      },
    },
    { additionalProperties: s.json() },
  );
