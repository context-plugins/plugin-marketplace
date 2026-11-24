import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Summary of a cloud account (layer) connected to a diagram. */
export type CloudDiagramSchemeStatussheetInfo = {
  /** Layer ID. */
  ssid: string;
  /** Layer name. */
  name: string;
  /** Connected cloud account name. */
  accountName: string;
  /** Number of active alarms. */
  alarmsCount: number;
  /** True when the layer contains no components. */
  empty: boolean;
  /** Layer color. */
  color: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramSchemeStatussheetInfoSchema: Schema<CloudDiagramSchemeStatussheetInfo> =
  s.object<CloudDiagramSchemeStatussheetInfo>(
    {
      ssid: s.string(),
      name: s.string(),
      accountName: s.string(),
      alarmsCount: s.int(),
      empty: s.boolean(),
      color: s.string(),
      _keysMap: {
        accountName: "account_name",
        alarmsCount: "alarms_count",
      },
    },
    { additionalProperties: s.json() },
  );
