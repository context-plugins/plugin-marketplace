import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  virtualAccountInternalSchema,
  virtualAccountSchema,
  type VirtualAccount,
} from "./virtual-account.js";

export type VirtualAccountsResponse = {
  entity?: string;
  count?: number;
  items?: VirtualAccount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const virtualAccountsResponseProperties: s.Shape<VirtualAccountsResponse> = {
  entity: s.optional(s.string()),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => virtualAccountInternalSchema))),
};

export const virtualAccountsResponseInternalSchema: Schema<VirtualAccountsResponse> =
  s.object<VirtualAccountsResponse>(virtualAccountsResponseProperties, { additionalProperties: s.json() });

export const virtualAccountsResponseSchema: Schema<VirtualAccountsResponse> = s.lazySchema(() =>
  s.object<VirtualAccountsResponse>(
    {
      ...virtualAccountsResponseProperties,
      items: s.optional(s.array(s.lazy(() => virtualAccountSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
