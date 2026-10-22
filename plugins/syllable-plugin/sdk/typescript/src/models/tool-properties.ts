import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of tool fields supported for filtering/sorting on list endpoint. */
export const ToolProperties = {
  Id: "id",
  Name: "name",
  ServiceName: "service_name",
  Definition: "definition",
  ServiceId: "service_id",
  LastUpdated: "last_updated",
  LastUpdatedBy: "last_updated_by",
} as const;
export type ToolProperties = (typeof ToolProperties)[keyof typeof ToolProperties] | (string & {});

export const toolPropertiesSchema: EnumSchema<ToolProperties> = s.enumOf<ToolProperties>(ToolProperties);
