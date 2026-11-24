import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialLinksLushaApiDocumentationEnrichApi = {
  linkedin?: string;
  xUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialLinksLushaApiDocumentationEnrichApiSchema: Schema<SocialLinksLushaApiDocumentationEnrichApi> =
  s.object<SocialLinksLushaApiDocumentationEnrichApi>(
    {
      linkedin: s.optional(s.string()),
      xUrl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
