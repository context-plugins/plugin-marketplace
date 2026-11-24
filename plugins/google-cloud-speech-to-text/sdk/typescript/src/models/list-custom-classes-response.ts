import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customClassSchema, type CustomClass } from "./custom-class.js";

/** Message returned to the client by the `ListCustomClasses` method. */
export type ListCustomClassesResponse = {
  /** The custom classes. */
  customClasses?: CustomClass[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCustomClassesResponseSchema: Schema<ListCustomClassesResponse> =
  s.object<ListCustomClassesResponse>(
    {
      customClasses: s.optional(s.array(s.lazy(() => customClassSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
