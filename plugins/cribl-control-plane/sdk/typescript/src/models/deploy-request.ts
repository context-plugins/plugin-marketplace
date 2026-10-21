import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deployRequestLookupsSchema, type DeployRequestLookups } from "./deploy-request-lookups.js";

export type DeployRequest = {
  /** Optional list of lookup file deployments to include with the commit deployment. */
  lookups?: DeployRequestLookups[];
  /** Commit hash to deploy to the Worker Group, Outpost Group, or Edge Fleet. */
  version: string;
};

export const deployRequestSchema: Schema<DeployRequest> = s.object<DeployRequest>({
  lookups: s.optional(s.array(s.lazy(() => deployRequestLookupsSchema))),
  version: s.string(),
});
