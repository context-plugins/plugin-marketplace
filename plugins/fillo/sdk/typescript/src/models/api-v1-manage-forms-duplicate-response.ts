import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsDuplicateResponse = {
  id: string;
  name: string;
  slug: string;
  /** @default "draft" */
  status?: "draft";
  /** The form this copy came from. */
  source: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsDuplicateResponseProperties: s.Shape<ApiV1ManageFormsDuplicateResponse> = {
  id: s.string(),
  name: s.string(),
  slug: s.string(),
  status: s.defaulted(s.literal("draft"), "draft"),
  source: s.string(),
  url: s.string(),
};

export const apiV1ManageFormsDuplicateResponseInternalSchema: Schema<ApiV1ManageFormsDuplicateResponse> =
  s.object<ApiV1ManageFormsDuplicateResponse>(apiV1ManageFormsDuplicateResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageFormsDuplicateResponseSchema: Schema<ApiV1ManageFormsDuplicateResponse> =
  s.lazySchema(() =>
    s.object<ApiV1ManageFormsDuplicateResponse>(
      {
        ...apiV1ManageFormsDuplicateResponseProperties,
        url: s.string().check(s.url()),
      },
      { additionalProperties: s.json() },
    ),
  );
