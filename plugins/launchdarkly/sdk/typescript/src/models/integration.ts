import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import {
  integrationSubscriptionStatusRepSchema,
  type IntegrationSubscriptionStatusRep,
} from "./integration-subscription-status-rep.js";
import { linkSchema, type Link } from "./link.js";
import { statementSchema, type Statement } from "./statement.js";

export type Integration = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The ID for this integration audit log subscription */
  id?: string;
  /** The type of integration */
  kind?: string;
  /** A human-friendly name for the integration */
  name?: string;
  /**
   * Details on configuration for an integration of this type. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code> for a full
   * list of fields for each integration.
   */
  config?: Record<string, Record<string, unknown>>;
  /**
   * Represents a Custom role policy, defining a resource kinds filter the integration audit log
   * subscription responds to.
   */
  statements?: Statement[];
  /** Whether the integration is currently active */
  on?: boolean;
  /** An array of tags for this integration */
  tags?: string[];
  access?: Access;
  status?: IntegrationSubscriptionStatusRep;
  /** Slack webhook receiver URL. Only used for legacy Slack webhook integrations. */
  url?: string;
  /** Datadog API key. Only used for legacy Datadog webhook integrations. */
  apiKey?: string;
};

export const integrationSchema: Schema<Integration> = s.object<Integration>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  name: s.optional(s.string()),
  config: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  statements: s.optional(s.array(s.lazy(() => statementSchema))),
  on: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
  access: s.optional(s.lazy(() => accessSchema)),
  status: s.optional(s.lazy(() => integrationSubscriptionStatusRepSchema)),
  url: s.optional(s.string()),
  apiKey: s.optional(s.string()),
  _keysMap: {
    links: "_links",
    id: "_id",
    access: "_access",
    status: "_status",
  },
});
