import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBrowserStackAutomateRestSessionsApi = {
  Passed: "passed",
  Failed: "failed",
} as const;
export type StatusBrowserStackAutomateRestSessionsApi =
  | (typeof StatusBrowserStackAutomateRestSessionsApi)[keyof typeof StatusBrowserStackAutomateRestSessionsApi]
  | (string & {});

export const statusBrowserStackAutomateRestSessionsApiSchema: EnumSchema<StatusBrowserStackAutomateRestSessionsApi> =
  s.enumOf<StatusBrowserStackAutomateRestSessionsApi>(StatusBrowserStackAutomateRestSessionsApi);
