import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerAliasCreateRequest = {
  /** Alternate external identifier that should resolve to this customer. */
  alias: string;
  /** Optional display name for this alias. */
  name?: string;
  /** Optional note describing where this alias comes from. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerAliasCreateRequestSchema: Schema<CustomerAliasCreateRequest> =
  s.object<CustomerAliasCreateRequest>(
    {
      alias: s.string(),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
