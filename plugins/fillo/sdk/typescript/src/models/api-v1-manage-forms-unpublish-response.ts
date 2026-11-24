import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsUnpublishResponse = {
  id: string;
  name: string;
  slug: string;
  /** @default "draft" */
  status?: "draft";
  changed: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsUnpublishResponseSchema: Schema<ApiV1ManageFormsUnpublishResponse> =
  s.object<ApiV1ManageFormsUnpublishResponse>(
    {
      id: s.string(),
      name: s.string(),
      slug: s.string(),
      status: s.defaulted(s.literal("draft"), "draft"),
      changed: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
