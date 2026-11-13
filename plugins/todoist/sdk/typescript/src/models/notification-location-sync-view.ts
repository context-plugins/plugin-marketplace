import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locTrigger2Schema, type LocTrigger2 } from "./loc-trigger2.js";
import { Type1, type1Schema } from "./type1.js";

/**
 * A class with fields representing a NotificationLocationView which will be returned to clients in
 * a sync-like response.
 */
export type NotificationLocationSyncView = {
  /** String ID of the location reminder */
  id: string;
  /** String ID of the task */
  itemId: string;
  /** String ID of the project containing the task */
  projectId: string;
  /** String ID of the user who will receive the reminder */
  notifyUid: string;
  /** Name of the location */
  name: string;
  /** Latitude of the location */
  locLat: string;
  /** Longitude of the location */
  locLong: string;
  /** Trigger type for the location reminder */
  locTrigger: LocTrigger2;
  /** Radius in meters */
  radius: number;
  /** Whether the location reminder is deleted */
  isDeleted: boolean;
  /** The reminder type @default Type1.Location */
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationLocationSyncViewSchema: Schema<NotificationLocationSyncView> =
  s.object<NotificationLocationSyncView>(
    {
      id: s.string(),
      itemId: s.string(),
      projectId: s.string(),
      notifyUid: s.string(),
      name: s.string(),
      locLat: s.string(),
      locLong: s.string(),
      locTrigger: locTrigger2Schema,
      radius: s.int(),
      isDeleted: s.boolean(),
      type: s.defaulted(type1Schema, Type1.Location),
      _keysMap: {
        itemId: "item_id",
        projectId: "project_id",
        notifyUid: "notify_uid",
        locLat: "loc_lat",
        locLong: "loc_long",
        locTrigger: "loc_trigger",
        isDeleted: "is_deleted",
      },
    },
    { additionalProperties: s.json() },
  );
