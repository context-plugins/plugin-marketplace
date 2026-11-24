import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacySchema, type Privacy } from "./privacy.js";

/** Array of Doc responses */
export type Docs = {
  /** Archbee id, used for private access */
  id?: string;
  /** name of document */
  name?: string;
  /** url of public document, used for public access (if published) */
  urlKey?: string;
  /**
   * In case you are migrating from another platform and you’d like to get a redirecting url to your
   * current url, you can use this url path.
   */
  urlAlias?: string;
  /** indicates if document is hidden */
  hidden?: boolean;
  /** describes how to access the document via public url (if published) */
  privacy?: Privacy;
  /** text from document, similar with query (word-based search only) */
  highlight?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSchema: Schema<Docs> = s.object<Docs>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    urlKey: s.optional(s.string()),
    urlAlias: s.optional(s.string()),
    hidden: s.optional(s.boolean()),
    privacy: s.optional(s.lazy(() => privacySchema)),
    highlight: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
