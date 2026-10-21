import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acceptHeaderSchema, type AcceptHeader } from "./unions/accept-header.js";
import { userDeviceSchema, type UserDevice } from "./user-device.js";

/** Merchant provided browser info */
export type BrowserInfo = {
  javascriptEnabled: boolean;
  javaEnabled: boolean;
  language: string;
  colorDepth: number;
  screenHeight: number;
  screenWidth: number;
  timeZoneOffset: number;
  /** Exact content of the HTTP user-agent header. */
  userAgent: string;
  /** The platform that is being used to access the website. */
  userDevice: UserDevice;
  /** The Accept header of the request from the buyer's browser. */
  acceptHeader?: AcceptHeader;
};

export const browserInfoSchema: Schema<BrowserInfo> = s.object<BrowserInfo>({
  javascriptEnabled: s.boolean(),
  javaEnabled: s.boolean(),
  language: s.string(),
  colorDepth: s.int(),
  screenHeight: s.int(),
  screenWidth: s.int(),
  timeZoneOffset: s.int(),
  userAgent: s.string(),
  userDevice: userDeviceSchema,
  acceptHeader: s.optional(s.lazy(() => acceptHeaderSchema)),
  _keysMap: {
    javascriptEnabled: "javascript_enabled",
    javaEnabled: "java_enabled",
    colorDepth: "color_depth",
    screenHeight: "screen_height",
    screenWidth: "screen_width",
    timeZoneOffset: "time_zone_offset",
    userAgent: "user_agent",
    userDevice: "user_device",
    acceptHeader: "accept_header",
  },
});
