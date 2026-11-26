import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { networkSchema, type Network } from "./network.js";

/** Network search response. */
export type NetworkSearchResponseDto = {
  /** Results that match the search criteria */
  results?: Network[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkSearchResponseDtoSchema: Schema<NetworkSearchResponseDto> =
  s.object<NetworkSearchResponseDto>(
    {
      results: s.optional(s.array(s.lazy(() => networkSchema))),
    },
    { additionalProperties: s.json() },
  );
