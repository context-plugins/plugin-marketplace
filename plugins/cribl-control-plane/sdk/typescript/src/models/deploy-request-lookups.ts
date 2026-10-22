import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookup1Schema, type Lookup1 } from "./lookup1.js";

export type DeployRequestLookups = {
  /**
   * Lookup context to deploy. Use <code>cribl</code> for the default context or a Pack
   * <code>id</code> for Pack lookups.
   */
  context: string;
  /** List of lookup files to deploy in this context. */
  lookups: Lookup1[];
};

export const deployRequestLookupsSchema: Schema<DeployRequestLookups> = s.object<DeployRequestLookups>({
  context: s.string(),
  lookups: s.array(s.lazy(() => lookup1Schema)),
});
