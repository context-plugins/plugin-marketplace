import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type ConnectorToggleRequest = {
  /** 'sync' flips data synchronization; 'agent' flips use by agents */
  type: Type3;
  /** When turning sync on, start from scratch */
  fullSync?: boolean;
  /** Local FS only */
  deviceId?: string;
  /** Local FS only */
  deviceName?: string;
};

export const connectorToggleRequestSchema: Schema<ConnectorToggleRequest> = s.object<ConnectorToggleRequest>({
  type: type3Schema,
  fullSync: s.optional(s.boolean()),
  deviceId: s.optional(s.string()),
  deviceName: s.optional(s.string()),
});
