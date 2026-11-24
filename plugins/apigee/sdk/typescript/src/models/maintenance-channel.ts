import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Maintenance channel to specify relative scheduling for maintenance. */
export const MaintenanceChannel = {
  MaintenanceChannelUnspecified: "MAINTENANCE_CHANNEL_UNSPECIFIED",
  Week1: "WEEK1",
  Week2: "WEEK2",
} as const;
export type MaintenanceChannel = (typeof MaintenanceChannel)[keyof typeof MaintenanceChannel] | (string & {});

export const maintenanceChannelSchema: EnumSchema<MaintenanceChannel> =
  s.enumOf<MaintenanceChannel>(MaintenanceChannel);
