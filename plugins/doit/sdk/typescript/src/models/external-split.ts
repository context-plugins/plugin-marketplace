import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { externalOriginSchema, type ExternalOrigin } from "./external-origin.js";
import { externalSplitTargetSchema, type ExternalSplitTarget } from "./external-split-target.js";
import { mode3Schema, type Mode3 } from "./mode3.js";
import { type5Schema, type Type5 } from "./type5.js";

/** Specification of how to split costs. */
export type ExternalSplit = {
  /** ID of the field to split. */
  id?: string;
  /** Indicate whether to include the origin. */
  includeOrigin?: boolean;
  mode?: Mode3;
  /** Origin info for cost splitting. */
  origin?: ExternalOrigin;
  /** Targets for the split. */
  targets?: ExternalSplitTarget[];
  /** Type of the split. */
  type?: Type5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalSplitSchema: Schema<ExternalSplit> = s.object<ExternalSplit>(
  {
    id: s.optional(s.string()),
    includeOrigin: s.optional(s.boolean()),
    mode: s.optional(s.lazy(() => mode3Schema)),
    origin: s.optional(s.lazy(() => externalOriginSchema)),
    targets: s.optional(s.array(s.lazy(() => externalSplitTargetSchema))),
    type: s.optional(s.lazy(() => type5Schema)),
  },
  { additionalProperties: s.json() },
);
