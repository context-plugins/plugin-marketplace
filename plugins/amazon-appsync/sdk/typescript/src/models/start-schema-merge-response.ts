import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceApiAssociationStatusSchema,
  type SourceApiAssociationStatus,
} from "./source-api-association-status.js";

export type StartSchemaMergeResponse = {
  /** The state of the source API association. */
  sourceApiAssociationStatus?: SourceApiAssociationStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSchemaMergeResponseSchema: Schema<StartSchemaMergeResponse> =
  s.object<StartSchemaMergeResponse>(
    {
      sourceApiAssociationStatus: s.optional(s.lazy(() => sourceApiAssociationStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
