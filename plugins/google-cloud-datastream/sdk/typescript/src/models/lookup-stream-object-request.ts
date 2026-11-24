import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectIdentifier2Schema, type SourceObjectIdentifier2 } from "./source-object-identifier2.js";

/** Request for looking up a specific stream object by its source object identifier. */
export type LookupStreamObjectRequest = {
  /** Required. The source object identifier which maps to the stream object. */
  sourceObjectIdentifier?: SourceObjectIdentifier2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lookupStreamObjectRequestSchema: Schema<LookupStreamObjectRequest> =
  s.object<LookupStreamObjectRequest>(
    {
      sourceObjectIdentifier: s.optional(s.lazy(() => sourceObjectIdentifier2Schema)),
    },
    { additionalProperties: s.json() },
  );
