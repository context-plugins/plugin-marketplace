import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagLinkMemberSchema, type FlagLinkMember } from "./flag-link-member.js";
import { linkSchema, type Link } from "./link.js";
import { timestampRepSchema, type TimestampRep } from "./timestamp-rep.js";

export type FlagLinkRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The flag link key */
  key?: string;
  /**
   * The integration key for an integration whose <code>manifest.json</code> includes the
   * <code>flagLink</code> capability, if this is a flag link for an existing integration
   */
  integrationKey?: string;
  /** The ID of this flag link */
  id: string;
  /** The URL for the external resource the flag is linked to */
  deepLink: string;
  timestamp: TimestampRep;
  /** The title of the flag link */
  title?: string;
  /** The description of the flag link */
  description?: string;
  /**
   * The metadata required by this integration in order to create a flag link, if this is a flag
   * link for an existing integration. Defined in the integration's <code>manifest.json</code> file
   * under <code>flagLink</code>.
   */
  metadata?: Record<string, string>;
  createdAt: number;
  member?: FlagLinkMember;
};

export const flagLinkRepSchema: Schema<FlagLinkRep> = s.object<FlagLinkRep>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  key: s.optional(s.string()),
  integrationKey: s.optional(s.string()),
  id: s.string(),
  deepLink: s.string(),
  timestamp: timestampRepSchema,
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
  createdAt: s.int(),
  member: s.optional(s.lazy(() => flagLinkMemberSchema)),
  _keysMap: {
    links: "_links",
    key: "_key",
    integrationKey: "_integrationKey",
    id: "_id",
    deepLink: "_deepLink",
    timestamp: "_timestamp",
    metadata: "_metadata",
    createdAt: "_createdAt",
    member: "_member",
  },
});
