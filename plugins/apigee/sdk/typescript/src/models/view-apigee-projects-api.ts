import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ViewApigeeProjectsApi = {
  ApiViewTypeUnspecified: "API_VIEW_TYPE_UNSPECIFIED",
  McpServer: "MCP_SERVER",
  McpTool: "MCP_TOOL",
} as const;
export type ViewApigeeProjectsApi =
  | (typeof ViewApigeeProjectsApi)[keyof typeof ViewApigeeProjectsApi]
  | (string & {});

export const viewApigeeProjectsApiSchema: EnumSchema<ViewApigeeProjectsApi> =
  s.enumOf<ViewApigeeProjectsApi>(ViewApigeeProjectsApi);
