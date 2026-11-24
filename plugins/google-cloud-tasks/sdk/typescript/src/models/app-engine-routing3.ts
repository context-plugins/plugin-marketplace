import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Task-level setting for App Engine routing. * If app_engine_routing_override is set on the queue,
 * this value is used for all tasks in the queue, no matter what the setting is for the task-level
 * app_engine_routing.
 */
export type AppEngineRouting3 = {
  /**
   * App version. By default, the task is sent to the version which is the default version when the
   * task is attempted. For some queues or tasks which were created using the App Engine Task Queue
   * API, host is not parsable into service, version, and instance. For example, some tasks which
   * were created using the App Engine SDK use a custom domain name; custom domains are not parsed
   * by Cloud Tasks. If host is not parsable, then service, version, and instance are the empty
   * string.
   */
  version?: string;
  /**
   * App service. By default, the task is sent to the service which is the default service when the
   * task is attempted. For some queues or tasks which were created using the App Engine Task Queue
   * API, host is not parsable into service, version, and instance. For example, some tasks which
   * were created using the App Engine SDK use a custom domain name; custom domains are not parsed
   * by Cloud Tasks. If host is not parsable, then service, version, and instance are the empty
   * string.
   */
  service?: string;
  /**
   * App instance. By default, the task is sent to an instance which is available when the task is
   * attempted. Requests can only be sent to a specific instance if [manual scaling is used in App
   * Engine
   * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
   * App Engine Flex does not support instances. For more information, see [App Engine Standard
   * request
   * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and
   * [App Engine Flex request
   * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
   */
  instance?: string;
  /**
   * Output only. The host that the task is sent to. The host is constructed from the domain name of
   * the app associated with the queue's project ID (for example .appspot.com), and the service,
   * version, and instance. Tasks which were created using the App Engine SDK might have a custom
   * domain name. For more information, see [How Requests are
   * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
   */
  host?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appEngineRouting3Schema: Schema<AppEngineRouting3> = s.object<AppEngineRouting3>(
  {
    version: s.optional(s.string()),
    service: s.optional(s.string()),
    instance: s.optional(s.string()),
    host: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
