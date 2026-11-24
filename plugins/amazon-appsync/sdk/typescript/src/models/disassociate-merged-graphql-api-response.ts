import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceApiAssociationStatusSchema,
  type SourceApiAssociationStatus,
} from "./source-api-association-status.js";

export type DisassociateMergedGraphqlApiResponse = {
  /** The state of the source API association. */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateMergedGraphqlApiResponseSchema: Schema<DisassociateMergedGraphqlApiResponse> =
  s.object<DisassociateMergedGraphqlApiResponse>(
    {
      sourceApiAssociationStatus: s.optional(s.lazy(() => sourceApiAssociationStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
