import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The platform's name. */
export const Platform = {
  Debian: "DEBIAN",
  AmazonLinux: "AMAZON_LINUX",
  Ubuntu: "UBUNTU",
  WindowsServer: "WINDOWS_SERVER",
} as const;
export type Platform = (typeof Platform)[keyof typeof Platform] | (string & {});

export const platformSchema: EnumSchema<Platform> = s.enumOf<Platform>(Platform);
