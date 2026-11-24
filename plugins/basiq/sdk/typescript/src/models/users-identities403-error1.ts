import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum2PlatformAuthLinksApiSchema,
  type Datum2PlatformAuthLinksApi,
} from "./datum2-platform-auth-links-api.js";

export type UsersIdentities403Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2PlatformAuthLinksApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersIdentities403Error1Schema: Schema<UsersIdentities403Error1> =
  s.object<UsersIdentities403Error1>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum2PlatformAuthLinksApiSchema)),
    },
    { additionalProperties: s.json() },
  );
