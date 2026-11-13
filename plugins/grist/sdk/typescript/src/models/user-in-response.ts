import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailSchema, type Email } from "./email.js";
import { metaSchema, type Meta } from "./meta.js";
import { nameSchema, type Name } from "./name.js";
import { photoSchema, type Photo } from "./photo.js";
import { schemaEnumSchema, type SchemaEnum } from "./schema-enum.js";

export type UserInResponse = {
  meta?: Meta;
  /** The unique identifier of the user. */
  id?: string;
  schemas?: SchemaEnum[];
  /** The unique username. */
  userName?: string;
  name?: Name;
  emails?: Email[];
  /** the display name of the user */
  displayName?: string;
  /**
   * Indicates the user's preferred written or spoken languages and is generally used for selecting
   * a localized user interface.
   */
  preferredLanguage?: string;
  /**
   * Used to indicate the User's default location for purposes of localizing such items as currency,
   * date time format, or numerical representations.
   */
  locale?: string;
  /** The picture of the user. It is expected to have a single item in the context of Grist. */
  photos?: Photo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userInResponseSchema: Schema<UserInResponse> = s.object<UserInResponse>(
  {
    meta: s.optional(s.lazy(() => metaSchema)),
    id: s.optional(s.string()),
    schemas: s.optional(s.array(s.lazy(() => schemaEnumSchema))),
    userName: s.optional(s.string()),
    name: s.optional(s.lazy(() => nameSchema)),
    emails: s.optional(s.array(s.lazy(() => emailSchema))),
    displayName: s.optional(s.string()),
    preferredLanguage: s.optional(s.string()),
    locale: s.optional(s.string()),
    photos: s.optional(s.array(s.lazy(() => photoSchema))),
  },
  { additionalProperties: s.json() },
);
