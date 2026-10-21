import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PackageInstallRequest = {
  /** List of Chocolatey package names to install */
  packages: string[];
};

export const packageInstallRequestSchema: Schema<PackageInstallRequest> = s.object<PackageInstallRequest>({
  packages: s.array(s.string()),
});
