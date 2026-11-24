import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reversalInternalSchema, reversalSchema, type Reversal } from "./reversal.js";

export type TransfersReversalsResponse = {
  entity?: string;
  count?: number;
  items?: Reversal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transfersReversalsResponseProperties: s.Shape<TransfersReversalsResponse> = {
  entity: s.optional(s.string()),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => reversalInternalSchema))),
};

export const transfersReversalsResponseInternalSchema: Schema<TransfersReversalsResponse> =
  s.object<TransfersReversalsResponse>(transfersReversalsResponseProperties, {
    additionalProperties: s.json(),
  });

export const transfersReversalsResponseSchema: Schema<TransfersReversalsResponse> = s.lazySchema(() =>
  s.object<TransfersReversalsResponse>(
    {
      ...transfersReversalsResponseProperties,
      items: s.optional(s.array(s.lazy(() => reversalSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
