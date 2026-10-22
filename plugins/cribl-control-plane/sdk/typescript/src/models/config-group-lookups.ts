import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookupSchema, type Lookup } from "./lookup.js";

export type ConfigGroupLookups = {
  /** The Worker or Node context for the lookup deployment. */
  context: string;
  /** List of lookup files deployed to this context. */
  lookups: Lookup[];
};

export const configGroupLookupsSchema: Schema<ConfigGroupLookups> = s.object<ConfigGroupLookups>({
  context: s.string(),
  lookups: s.array(s.lazy(() => lookupSchema)),
});
