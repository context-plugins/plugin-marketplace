import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotTypeMetadataSchema, type SlotTypeMetadata } from "./slot-type-metadata.js";

export type GetSlotTypesResponse = {
  /**
   * An array of objects, one for each slot type, that provides information such as the name of the
   * slot type, the version, and a description.
   */
  slotTypes?: SlotTypeMetadata[];
  /**
   * If the response is truncated, it includes a pagination token that you can specify in your next
   * request to fetch the next page of slot types.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSlotTypesResponseSchema: Schema<GetSlotTypesResponse> = s.object<GetSlotTypesResponse>(
  {
    slotTypes: s.optional(s.array(s.lazy(() => slotTypeMetadataSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
