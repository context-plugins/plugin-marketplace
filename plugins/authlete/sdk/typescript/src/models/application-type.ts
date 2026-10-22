import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The application type. The value of this property affects the validation steps for a redirect URI.
 * See the description about `redirectUris` property for more details.
 */
export const ApplicationType = {
  Web: "WEB",
  Native: "NATIVE",
} as const;
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType] | (string & {});

export const applicationTypeSchema: EnumSchema<ApplicationType> = s.enumOf<ApplicationType>(ApplicationType);
