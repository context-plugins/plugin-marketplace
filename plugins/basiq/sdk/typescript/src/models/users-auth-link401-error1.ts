import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datum1PlatformAuthLinksApiSchema,
  type Datum1PlatformAuthLinksApi,
} from "./datum1-platform-auth-links-api.js";

export type UsersAuthLink401Error1 = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1PlatformAuthLinksApi[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersAuthLink401Error1Schema: Schema<UsersAuthLink401Error1> = s.object<UsersAuthLink401Error1>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum1PlatformAuthLinksApiSchema)),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
