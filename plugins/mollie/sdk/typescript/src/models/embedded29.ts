import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Embedded29 = {
  /**
   * An array of terminal pairing code objects. For a complete reference of the terminal pairing
   * code object, refer to the [Get terminal pairing code endpoint](terminals-get-pairing-code)
   * documentation.
   */
  terminalPairingCodes?: Record<string, unknown>[];
};

export const embedded29Schema: Schema<Embedded29> = s.object<Embedded29>({
  terminalPairingCodes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    terminalPairingCodes: "terminal-pairing-codes",
  },
});
