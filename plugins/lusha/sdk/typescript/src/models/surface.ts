import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Surface = {
  Api: "api",
  Mcp: "mcp",
  Workspace: "workspace",
} as const;
export type Surface = (typeof Surface)[keyof typeof Surface] | (string & {});

export const surfaceSchema: EnumSchema<Surface> = s.enumOf<Surface>(Surface);
