import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UboResponseData = {
  /** The UBO email */
  email?: string;
  /** A unique ID for the UBO */
  uboId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uboResponseDataProperties: s.Shape<UboResponseData> = {
  email: s.optional(s.string()),
  uboId: s.optional(s.string()),
};

export const uboResponseDataInternalSchema: Schema<UboResponseData> = s.object<UboResponseData>(
  uboResponseDataProperties,
  { additionalProperties: s.json() },
);

export const uboResponseDataSchema: Schema<UboResponseData> = s.lazySchema(() =>
  s.object<UboResponseData>(
    {
      ...uboResponseDataProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
