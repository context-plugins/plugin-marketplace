import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotTypeMetadataSchema, type SlotTypeMetadata } from "./slot-type-metadata.js";

export type GetSlotTypeVersionsResponse = {
  /**
   * An array of SlotTypeMetadata objects, one for each numbered version of the slot type plus one
   * for the $LATEST version.
   */
  slotTypes?: SlotTypeMetadata[];
  /**
   * A pagination token for fetching the next page of slot type versions. If the response to this
   * call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next
   * page of versions, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSlotTypeVersionsResponseSchema: Schema<GetSlotTypeVersionsResponse> =
  s.object<GetSlotTypeVersionsResponse>(
    {
      slotTypes: s.optional(s.array(s.lazy(() => slotTypeMetadataSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
