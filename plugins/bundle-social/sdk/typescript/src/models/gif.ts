import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Provider, providerSchema } from "./provider.js";

export type Gif = {
  gifId: string;
  /** @default Provider.Giphy */
  provider?: Provider;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gifSchema: Schema<Gif> = s.object<Gif>(
  {
    gifId: s.string(),
    provider: s.defaulted(providerSchema, Provider.Giphy),
  },
  { additionalProperties: s.json() },
);
