import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { linkSchema, type Link } from "./link.js";
import { statementSchema, type Statement } from "./statement.js";

export type Webhook = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The ID of this webhook */
  id: string;
  /** A human-readable name for this webhook */
  name?: string;
  /** The URL to which LaunchDarkly sends an HTTP POST payload for this webhook */
  url: string;
  /** The secret for this webhook */
  secret?: string;
  /** Represents a Custom role policy, defining a resource kinds filter the webhook responds to. */
  statements?: Statement[];
  /** Whether or not this webhook is enabled */
  on: boolean;
  /** List of tags for this webhook */
  tags: string[];
  access?: Access;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  id: s.string(),
  name: s.optional(s.string()),
  url: s.string(),
  secret: s.optional(s.string()),
  statements: s.optional(s.array(s.lazy(() => statementSchema))),
  on: s.boolean(),
  tags: s.array(s.string()),
  access: s.optional(s.lazy(() => accessSchema)),
  _keysMap: {
    links: "_links",
    id: "_id",
    access: "_access",
  },
});
