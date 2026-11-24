import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Hosts every credential from opVaultId may be typed into, e.g. ["amazon.com"]. Omit to derive each
 * item's hosts from its own 1Password website entries; items with no website are then skipped and
 * reported in skippedVaultItems. A host covers its subdomains, so 1Password's ExactDomain autofill
 * setting is not honored either way.
 */
export type Opvaultalloweddomains = string[];

export const opvaultalloweddomainsSchema: Schema<Opvaultalloweddomains> = s.of<Opvaultalloweddomains>(
  s.union([s.array(s.string())]),
);
