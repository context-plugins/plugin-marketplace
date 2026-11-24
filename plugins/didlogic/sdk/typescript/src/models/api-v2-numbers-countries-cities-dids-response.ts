import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { didsSchema, type Dids } from "./dids.js";

export type ApiV2NumbersCountriesCitiesDidsResponse = {
  /** Paginated list of available DID numbers */
  dids: Dids;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesCitiesDidsResponseSchema: Schema<ApiV2NumbersCountriesCitiesDidsResponse> =
  s.object<ApiV2NumbersCountriesCitiesDidsResponse>(
    {
      dids: didsSchema,
    },
    { additionalProperties: s.json() },
  );
