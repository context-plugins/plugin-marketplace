import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Visibility, visibilitySchema } from "./visibility.js";

export type ApiV1MiscLinkedinPostReshareRequest = {
  teamId: string;
  /** LinkedIn post URN to reshare */
  parentPostUrn: string;
  commentary: string;
  /** @default Visibility.Public */
  visibility?: Visibility | null;
  /** @default false */
  disableReshare?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscLinkedinPostReshareRequestProperties: s.Shape<ApiV1MiscLinkedinPostReshareRequest> = {
  teamId: s.string(),
  parentPostUrn: s.string(),
  commentary: s.string(),
  visibility: s.defaulted(s.nullable(s.lazy(() => visibilitySchema)), Visibility.Public),
  disableReshare: s.defaulted(s.nullable(s.boolean()), false),
};

export const apiV1MiscLinkedinPostReshareRequestInternalSchema: Schema<ApiV1MiscLinkedinPostReshareRequest> =
  s.object<ApiV1MiscLinkedinPostReshareRequest>(apiV1MiscLinkedinPostReshareRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscLinkedinPostReshareRequestSchema: Schema<ApiV1MiscLinkedinPostReshareRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscLinkedinPostReshareRequest>(
      {
        ...apiV1MiscLinkedinPostReshareRequestProperties,
        parentPostUrn: s.string().check(s.minLength(1)),
        commentary: s.string().check(s.minLength(1), s.maxLength(3000)),
      },
      { additionalProperties: s.json() },
    ),
  );
