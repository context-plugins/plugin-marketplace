import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dids4Schema, type Dids4 } from "./dids4.js";

export type ApiV2NumbersResponse = {
  /** List of DID numbers owned by the user */
  dids: Dids4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersResponseSchema: Schema<ApiV2NumbersResponse> = s.object<ApiV2NumbersResponse>(
  {
    dids: s.array(s.lazy(() => dids4Schema)),
  },
  { additionalProperties: s.json() },
);
