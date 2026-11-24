import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

/** Origin info for cost splitting. */
export type ExternalOrigin = {
  /** ID of the origin. */
  id?: string;
  /** Type of the origin. */
  type?: Type3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalOriginSchema: Schema<ExternalOrigin> = s.object<ExternalOrigin>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type3Schema)),
  },
  { additionalProperties: s.json() },
);
