import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deployModeSchema, type DeployMode } from "./deploy-mode.js";

export type Lookup = {
  /** Deploy mode configured on the lookup file. */
  deployMode?: DeployMode;
  /** Version of the lookup file currently deployed on the Worker or Node. */
  deployedVersion?: string;
  /** File name of the deployed lookup. */
  file: string;
  /** Version of the lookup file currently staged for deployment. */
  version?: string;
};

export const lookupSchema: Schema<Lookup> = s.object<Lookup>({
  deployMode: s.optional(s.lazy(() => deployModeSchema)),
  deployedVersion: s.optional(s.string()),
  file: s.string(),
  version: s.optional(s.string()),
});
