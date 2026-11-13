import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locTriggerSchema, type LocTrigger } from "./loc-trigger.js";

export type Body16 = {
  /** String ID of the task */
  taskId: string;
  /** Name of the location */
  name: string;
  /** Latitude of the location */
  locLat: string;
  /** Longitude of the location */
  locLong: string;
  /** Trigger type: 'on_enter' or 'on_leave' */
  locTrigger: LocTrigger;
  /** Radius in meters (default 100, max 255) @default 100 */
  radius?: number;
  /**
   * String ID of the user who receives the reminder. Must be a collaborator of the task's project.
   * Defaults to the user creating the reminder. To find User IDs, use [Get
   * user](#operation/user_info_api_v1_user_get) for your own ID or [Get all
   * collaborators](#operation/get_project_collaborators_api_v1_projects__project_id__collaborators_get)
   * for project members.
   */
  notifyUid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body16Properties: s.Shape<Body16> = {
  taskId: s.string(),
  name: s.string(),
  locLat: s.string(),
  locLong: s.string(),
  locTrigger: locTriggerSchema,
  radius: s.defaulted(s.int(), 100),
  notifyUid: s.optionalNullable(s.string()),
  _keysMap: {
    taskId: "task_id",
    locLat: "loc_lat",
    locLong: "loc_long",
    locTrigger: "loc_trigger",
    notifyUid: "notify_uid",
  },
};

export const body16InternalSchema: Schema<Body16> = s.object<Body16>(body16Properties, {
  additionalProperties: s.json(),
});

export const body16Schema: Schema<Body16> = s.lazySchema(() =>
  s.object<Body16>(
    {
      ...body16Properties,
      name: s.string().check(s.minLength(1), s.maxLength(255)),
      locLat: s.string().check(s.minLength(1), s.maxLength(20)),
      locLong: s.string().check(s.minLength(1), s.maxLength(20)),
      radius: s.defaulted(s.int().check(s.gte(1), s.lte(255)), 100),
    },
    { additionalProperties: s.json() },
  ),
);
