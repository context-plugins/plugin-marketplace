import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetShortcutRequest = {
  /** The alias for the shortcut, including any arguments for variable shortcuts. */
  alias: string;
};

export const getShortcutRequestSchema: Schema<GetShortcutRequest> = s.object<GetShortcutRequest>({
  alias: s.string(),
});
