import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Source of the record:
 * - UPLOAD: Manually uploaded via API/UI
 * - CONNECTOR: Synced from external connector
 */
export const Origin = {
  Upload: "UPLOAD",
  Connector: "CONNECTOR",
} as const;
export type Origin = (typeof Origin)[keyof typeof Origin] | (string & {});

export const originSchema: EnumSchema<Origin> = s.enumOf<Origin>(Origin);
