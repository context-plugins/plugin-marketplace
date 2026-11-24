import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { placeActionTypeSchema, type PlaceActionType } from "./place-action-type.js";

export type PlaceActionLink = {
  name?: string;
  uri?: string;
  placeActionType?: PlaceActionType;
  isPreferred?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const placeActionLinkProperties: s.Shape<PlaceActionLink> = {
  name: s.optional(s.string()),
  uri: s.optional(s.string()),
  placeActionType: s.optional(s.lazy(() => placeActionTypeSchema)),
  isPreferred: s.optional(s.boolean()),
};

export const placeActionLinkInternalSchema: Schema<PlaceActionLink> = s.object<PlaceActionLink>(
  placeActionLinkProperties,
  { additionalProperties: s.json() },
);

export const placeActionLinkSchema: Schema<PlaceActionLink> = s.lazySchema(() =>
  s.object<PlaceActionLink>(
    {
      ...placeActionLinkProperties,
      uri: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
