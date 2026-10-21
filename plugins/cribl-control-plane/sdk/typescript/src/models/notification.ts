import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metadataItemSchema, type MetadataItem } from "./metadata-item.js";
import { notificationMode2Schema, type NotificationMode2 } from "./notification-mode2.js";
import {
  notificationTargetConfigSchema,
  type NotificationTargetConfig,
} from "./notification-target-config.js";
import {
  notificationTargetDetailsSchema,
  type NotificationTargetDetails,
} from "./notification-target-details.js";
import { templateTargetPairSchema, type TemplateTargetPair } from "./template-target-pair.js";

export type Notification = {
  /**
   * Fleet or group id this entity was inherited from when served by a Config Helper for a child
   * fleet. Present when inherited from parent, including when the child has a local overlay.
   * Omitted when the entity is local and not inherited. Display-only; never persisted.
   */
  srcGroup?: string;
  /**
   * If true, the child fleet has a local overlay on an inherited entity. Omitted when inherited and
   * unmodified, or when local and not inherited. Display-only; never persisted.
   */
  srcOverridden?: boolean;
  /**
   * The condition that triggers the Notification. Use <code>GET /conditions</code> for a list of
   * supported <code>condition</code> values.
   */
  condition: string;
  /**
   * Configuration for the <code>condition</code> that triggers the Notification. Supported fields
   * vary depending on the <code>condition</code>. Use <code>GET /conditions/{id}</code> to review
   * the configuration for a specific <code>condition</code>.
   */
  conf: Record<string, unknown>;
  /**
   * If <code>true</code>, the Notification is disabled and the specified condition will not trigger
   * it.
   */
  disabled?: boolean;
  /** The <code>id</code> of the Worker Group or Edge Fleet that the Notification applies to. */
  group?: string;
  /** Unique identifier. */
  id: string;
  /** Metadata tags for the Notification. */
  metadata?: MetadataItem[];
  /**
   * Delivery mode for Notifications.<br/><br/> <code>direct</code>: Notification is sent directly
   * to Notification targets that are defined in <code>templateTargetPairs</code>.<br/><br/>
   * <code>policy</code>: Notification is routed through Notification Policies, which match alerts
   * by labels and route them to Notification targets without relying on
   * <code>templateTargetPairs</code>.
   */
  mode?: NotificationMode2;
  /**
   * The <code>id</code> of the Pack the Notification belongs to. Automatically populated and
   * returned in responses.
   */
  pack?: string;
  /** Override settings to apply for each referenced Notification target. */
  targetConfigs?: NotificationTargetConfig[];
  /** Additional details about referenced Notification targets. Optionally populated on request. */
  targetDetails?: NotificationTargetDetails[];
  /**
   * List of the <code>id</code> values for the Notification targets to send the Notification to.
   */
  targets: string[];
  /**
   * If <code>mode</code> is <code>direct</code>, the key-value pairs that define the Notification
   * templates and targets to use for sending Notifications.
   */
  templateTargetPairs?: TemplateTargetPair[];
};

export const notificationSchema: Schema<Notification> = s.object<Notification>({
  srcGroup: s.optional(s.string()),
  srcOverridden: s.optional(s.boolean()),
  condition: s.string(),
  conf: s.record(s.string(), s.unknown()),
  disabled: s.optional(s.boolean()),
  group: s.optional(s.string()),
  id: s.string(),
  metadata: s.optional(s.array(s.lazy(() => metadataItemSchema))),
  mode: s.optional(s.lazy(() => notificationMode2Schema)),
  pack: s.optional(s.string()),
  targetConfigs: s.optional(s.array(s.lazy(() => notificationTargetConfigSchema))),
  targetDetails: s.optional(s.array(s.lazy(() => notificationTargetDetailsSchema))),
  targets: s.array(s.string()),
  templateTargetPairs: s.optional(s.array(s.lazy(() => templateTargetPairSchema))),
  _keysMap: {
    srcGroup: "__srcGroup",
    srcOverridden: "__srcOverridden",
  },
});
