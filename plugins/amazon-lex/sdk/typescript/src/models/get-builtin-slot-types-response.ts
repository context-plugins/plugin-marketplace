import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { builtinSlotTypeMetadataSchema, type BuiltinSlotTypeMetadata } from "./builtin-slot-type-metadata.js";

export type GetBuiltinSlotTypesResponse = {
  /** An array of BuiltInSlotTypeMetadata objects, one entry for each slot type returned. */
  slotTypes?: BuiltinSlotTypeMetadata[];
  /**
   * If the response is truncated, the response includes a pagination token that you can use in your
   * next request to fetch the next page of slot types.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBuiltinSlotTypesResponseSchema: Schema<GetBuiltinSlotTypesResponse> =
  s.object<GetBuiltinSlotTypesResponse>(
    {
      slotTypes: s.optional(s.array(s.lazy(() => builtinSlotTypeMetadataSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
