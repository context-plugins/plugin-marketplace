import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instrumentInternalSchema, instrumentSchema, type Instrument } from "./instrument.js";

export type MarginRequest = {
  /** instruments */
  instruments: Instrument[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const marginRequestProperties: s.Shape<MarginRequest> = {
  instruments: s.array(s.lazy(() => instrumentInternalSchema)),
};

export const marginRequestInternalSchema: Schema<MarginRequest> = s.object<MarginRequest>(
  marginRequestProperties,
  { additionalProperties: s.json() },
);

export const marginRequestSchema: Schema<MarginRequest> = s.lazySchema(() =>
  s.object<MarginRequest>(
    {
      ...marginRequestProperties,
      instruments: s.array(s.lazy(() => instrumentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
