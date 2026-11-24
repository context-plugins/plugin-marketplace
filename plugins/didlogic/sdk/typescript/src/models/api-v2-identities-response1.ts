import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { identity2Schema, type Identity2 } from "./identity2.js";

export type ApiV2IdentitiesResponse1 = {
  /** Success message */
  message: string;
  /** Created identity ID */
  identityId: number;
  /** Created identity details */
  identity: Identity2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2IdentitiesResponse1Schema: Schema<ApiV2IdentitiesResponse1> =
  s.object<ApiV2IdentitiesResponse1>(
    {
      message: s.string(),
      identityId: s.int(),
      identity: identity2Schema,
      _keysMap: {
        identityId: "identity_id",
      },
    },
    { additionalProperties: s.json() },
  );
