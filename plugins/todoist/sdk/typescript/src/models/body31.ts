import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locTrigger1Schema, type LocTrigger1 } from "./loc-trigger1.js";

export type Body31 = {
  /** Name of the location. If not provided (or null), the value remains unchanged. */
  name?: string | null;
  /** Latitude of the location. If not provided (or null), the value remains unchanged. */
  locLat?: string | null;
  /** Longitude of the location. If not provided (or null), the value remains unchanged. */
  locLong?: string | null;
  /**
   * Trigger type: 'on_enter' or 'on_leave'. If not provided (or null), the value remains unchanged.
   */
  locTrigger?: LocTrigger1 | null;
  /** Radius in meters. If not provided (or null), the value remains unchanged. */
  radius?: number | null;
  /**
   * String ID of the user who receives the reminder. Must be a collaborator of the task's project.
   * To find User IDs, use [Get user](#operation/user_info_api_v1_user_get) for your own ID or [Get
   * all
   * collaborators](#operation/get_project_collaborators_api_v1_projects__project_id__collaborators_get)
   * for project members. Passing null or omitting this field will leave it unchanged.
   */
  notifyUid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body31Properties: s.Shape<Body31> = {
  name: s.optionalNullable(s.string()),
  locLat: s.optionalNullable(s.string()),
  locLong: s.optionalNullable(s.string()),
  locTrigger: s.optionalNullable(s.lazy(() => locTrigger1Schema)),
  radius: s.optionalNullable(s.int()),
  notifyUid: s.optionalNullable(s.string()),
  _keysMap: {
    locLat: "loc_lat",
    locLong: "loc_long",
    locTrigger: "loc_trigger",
    notifyUid: "notify_uid",
  },
};

export const body31InternalSchema: Schema<Body31> = s.object<Body31>(body31Properties, {
  additionalProperties: s.json(),
});

export const body31Schema: Schema<Body31> = s.lazySchema(() =>
  s.object<Body31>(
    {
      ...body31Properties,
      name: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      locLat: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(20))),
      locLong: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(20))),
      radius: s.optionalNullable(s.int().check(s.gte(1), s.lte(255))),
    },
    { additionalProperties: s.json() },
  ),
);
