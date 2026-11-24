import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An extension installed in a browser session. */
export type BrowserExtensionView = {
  /** Extension ID from POST /api/v4/extensions */
  id: string;
  /** Chromium extension ID, as in chrome-extension://{runtimeId}/ */
  runtimeId: string;
  /** Version from the extension manifest */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const browserExtensionViewSchema: Schema<BrowserExtensionView> = s.object<BrowserExtensionView>(
  {
    id: s.string(),
    runtimeId: s.string(),
    version: s.string(),
  },
  { additionalProperties: s.json() },
);
