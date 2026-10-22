import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SniSettings = {
  /**
   * If <code>true</code>, disable Server Name Indication (SNI) routing. Otherwise,
   * <code>false</code>.
   */
  disableSniRouting: boolean;
};

export const sniSettingsSchema: Schema<SniSettings> = s.object<SniSettings>({
  disableSniRouting: s.boolean(),
  _keysMap: {
    disableSniRouting: "disableSNIRouting",
  },
});
