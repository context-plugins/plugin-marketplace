import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BodyPreviewUserTemplateApiV1TemplatesUserPreviewPost = {
  /**
   * Resolve due dates and deadlines. Use false for an editor to receive raw date strings for the
   * supported content graph projection. On v1.6+, raw typed dues also include date_type, time and
   * timezone to preserve their meaning when saved.
   *
   * @default true
   */
  resolveDates?: boolean;
  file: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodyPreviewUserTemplateApiV1TemplatesUserPreviewPostSchema: Schema<BodyPreviewUserTemplateApiV1TemplatesUserPreviewPost> =
  s.object<BodyPreviewUserTemplateApiV1TemplatesUserPreviewPost>(
    {
      resolveDates: s.defaulted(s.boolean(), true),
      file: s.bytes(),
      _keysMap: {
        resolveDates: "resolve_dates",
      },
    },
    { additionalProperties: s.json() },
  );
