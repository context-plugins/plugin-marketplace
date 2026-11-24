import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  virtualInterfaceTestHistorySchema,
  type VirtualInterfaceTestHistory,
} from "./virtual-interface-test-history.js";

export type StartBgpFailoverTestResponse = {
  virtualInterfaceTest?: VirtualInterfaceTestHistory;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBgpFailoverTestResponseSchema: Schema<StartBgpFailoverTestResponse> =
  s.object<StartBgpFailoverTestResponse>(
    {
      virtualInterfaceTest: s.optional(s.lazy(() => virtualInterfaceTestHistorySchema)),
    },
    { additionalProperties: s.json() },
  );
