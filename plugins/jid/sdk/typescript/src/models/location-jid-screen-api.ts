import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { networkSchema, type Network } from "./network.js";
import { consistentSchema, type Consistent } from "./unions/consistent.js";

/** Present when location inputs were given */
export type LocationJidScreenApi = {
  /** true, false or "unknown" */
  consistent?: Consistent;
  reference?: Record<string, unknown> | null;
  signals?: Record<string, unknown>[];
  network?: Network;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationJidScreenApiSchema: Schema<LocationJidScreenApi> = s.object<LocationJidScreenApi>(
  {
    consistent: s.optional(s.lazy(() => consistentSchema)),
    reference: s.optionalNullable(s.record(s.string(), s.unknown())),
    signals: s.optional(s.array(s.record(s.string(), s.unknown()))),
    network: s.optional(s.lazy(() => networkSchema)),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
