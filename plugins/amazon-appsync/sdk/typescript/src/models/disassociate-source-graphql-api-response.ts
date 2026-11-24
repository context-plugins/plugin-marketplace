import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceApiAssociationStatusSchema,
  type SourceApiAssociationStatus,
} from "./source-api-association-status.js";

export type DisassociateSourceGraphqlApiResponse = {
  /** The state of the source API association. */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disassociateSourceGraphqlApiResponseSchema: Schema<DisassociateSourceGraphqlApiResponse> =
  s.object<DisassociateSourceGraphqlApiResponse>(
    {
      sourceApiAssociationStatus: s.optional(s.lazy(() => sourceApiAssociationStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
