import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of service fields supported for filtering/sorting on list endpoint. */
export const ServiceProperties = {
  Id: "id",
  Name: "name",
  Description: "description",
  LastUpdated: "last_updated",
  LastUpdatedBy: "last_updated_by",
} as const;
export type ServiceProperties = (typeof ServiceProperties)[keyof typeof ServiceProperties] | (string & {});

export const servicePropertiesSchema: EnumSchema<ServiceProperties> =
  s.enumOf<ServiceProperties>(ServiceProperties);
