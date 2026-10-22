import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ToolAuthType = {
  Basic: "basic",
  Bearer: "bearer",
  CustomHeaders: "custom_headers",
  Oauth2: "oauth2",
} as const;
export type ToolAuthType = (typeof ToolAuthType)[keyof typeof ToolAuthType] | (string & {});

export const toolAuthTypeSchema: EnumSchema<ToolAuthType> = s.enumOf<ToolAuthType>(ToolAuthType);
