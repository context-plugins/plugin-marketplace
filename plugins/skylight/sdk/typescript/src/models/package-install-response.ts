import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commandIdSchema, type CommandId } from "./unions/command-id.js";

export type PackageInstallResponse = {
  /** Command ID for tracking installation progress */
  commandId?: CommandId;
};

export const packageInstallResponseSchema: Schema<PackageInstallResponse> = s.object<PackageInstallResponse>({
  commandId: s.optional(s.lazy(() => commandIdSchema)),
  _keysMap: {
    commandId: "command_id",
  },
});
