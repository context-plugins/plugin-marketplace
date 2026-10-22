import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationKindSchema, type ApplicationKind } from "./application-kind.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

export type PostDeploymentEventInput = {
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /**
   * The application key. This defines the granularity at which you want to view your insights
   * metrics. Typically it is the name of one of the GitHub repositories that you use in this
   * project.<br/><br/>LaunchDarkly automatically creates a new application each time you send a
   * unique application key.
   */
  applicationKey: string;
  /** The application name. This defines how the application is displayed */
  applicationName?: string;
  /** The kind of application. Default: <code>server</code> */
  applicationKind?: ApplicationKind;
  /**
   * The application version. You can set the application version to any string that includes only
   * letters, numbers, periods (<code>.</code>), hyphens (<code>-</code>), or underscores
   * (<code>_</code>).<br/><br/>We recommend setting the application version to at least the first
   * seven characters of the SHA or to the tag of the GitHub commit for this deployment.
   */
  version: string;
  /** The version name. This defines how the version is displayed */
  versionName?: string;
  /** The event type */
  eventType: EventType;
  eventTime?: number;
  /** A JSON object containing metadata about the event */
  eventMetadata?: Record<string, Record<string, unknown>>;
  /** A JSON object containing metadata about the deployment */
  deploymentMetadata?: Record<string, Record<string, unknown>>;
};

export const postDeploymentEventInputSchema: Schema<PostDeploymentEventInput> =
  s.object<PostDeploymentEventInput>({
    projectKey: s.string(),
    environmentKey: s.string(),
    applicationKey: s.string(),
    applicationName: s.optional(s.string()),
    applicationKind: s.optional(s.lazy(() => applicationKindSchema)),
    version: s.string(),
    versionName: s.optional(s.string()),
    eventType: eventTypeSchema,
    eventTime: s.optional(s.int()),
    eventMetadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    deploymentMetadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  });
