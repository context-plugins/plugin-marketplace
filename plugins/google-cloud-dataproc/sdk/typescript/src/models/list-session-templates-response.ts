import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sessionTemplateSchema, type SessionTemplate } from "./session-template.js";

/** A list of session templates. */
export type ListSessionTemplatesResponse = {
  /** Output only. Session template list */
  sessionTemplates?: SessionTemplate[];
  /**
   * A token, which can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSessionTemplatesResponseSchema: Schema<ListSessionTemplatesResponse> =
  s.object<ListSessionTemplatesResponse>(
    {
      sessionTemplates: s.optional(s.array(s.lazy(() => sessionTemplateSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
