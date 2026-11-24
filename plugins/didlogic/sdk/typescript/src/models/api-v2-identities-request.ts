import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { identity1Schema, type Identity1 } from "./identity1.js";

export type ApiV2IdentitiesRequest = {
  identity?: Identity1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2IdentitiesRequestSchema: Schema<ApiV2IdentitiesRequest> = s.object<ApiV2IdentitiesRequest>(
  {
    identity: s.optional(s.lazy(() => identity1Schema)),
  },
  { additionalProperties: s.json() },
);
