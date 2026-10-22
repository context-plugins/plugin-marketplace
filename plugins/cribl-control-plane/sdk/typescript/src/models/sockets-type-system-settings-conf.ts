import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Unix domain socket configuration. */
export type SocketsTypeSystemSettingsConf = {
  /** Filesystem directory path where Unix domain socket files are created. */
  directory?: string;
};

export const socketsTypeSystemSettingsConfSchema: Schema<SocketsTypeSystemSettingsConf> =
  s.object<SocketsTypeSystemSettingsConf>({
    directory: s.optional(s.string()),
  });
