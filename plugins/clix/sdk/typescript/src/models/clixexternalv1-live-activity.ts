import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1LiveActivityAlert1Schema,
  type Clixexternalv1LiveActivityAlert1,
} from "./clixexternalv1-live-activity-alert1.js";
import {
  clixexternalv1LiveActivityTarget3Schema,
  type Clixexternalv1LiveActivityTarget3,
} from "./unions/clixexternalv1-live-activity-target3.js";

/** A live activity to be started on a user device. */
export type Clixexternalv1LiveActivity = {
  /** Target device and/or user for the live activity. */
  target: Clixexternalv1LiveActivityTarget3;
  /**
   * The name of the ActivityAttributes type defined in your iOS app (e.g., 'DeliveryAttributes').
   */
  attributesType: string;
  /** Initial values for ActivityAttributes (static data that doesn't change). */
  attributes: Record<string, unknown>;
  /** Initial values for ContentState (dynamic data that updates in real-time). */
  contentState: Record<string, unknown>;
  /**
   * Push notification alert displayed when the Live Activity starts. If not provided, defaults to
   * title: 'Live Activity', body: 'Started'.
   */
  alert?: Clixexternalv1LiveActivityAlert1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1LiveActivitySchema: Schema<Clixexternalv1LiveActivity> =
  s.object<Clixexternalv1LiveActivity>(
    {
      target: clixexternalv1LiveActivityTarget3Schema,
      attributesType: s.string(),
      attributes: s.record(s.string(), s.unknown()),
      contentState: s.record(s.string(), s.unknown()),
      alert: s.optional(s.lazy(() => clixexternalv1LiveActivityAlert1Schema)),
      _keysMap: {
        attributesType: "attributes_type",
        contentState: "content_state",
      },
    },
    { additionalProperties: s.json() },
  );
