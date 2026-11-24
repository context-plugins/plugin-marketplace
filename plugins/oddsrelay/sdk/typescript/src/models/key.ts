import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type Key = {
  id: string;
  kind: Kind;
  products: string[];
  regions: string[];
  tokenCap: string | null;
  tokensUsed: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keySchema: Schema<Key> = s.object<Key>(
  {
    id: s.string(),
    kind: kindSchema,
    products: s.array(s.string()),
    regions: s.array(s.string()),
    tokenCap: s.nullable(s.string()),
    tokensUsed: s.nullable(s.string()),
    _keysMap: {
      tokenCap: "token_cap",
      tokensUsed: "tokens_used",
    },
  },
  { additionalProperties: s.json() },
);
