import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExternalProviderSession = {
  /**
   * Present for MX exchange sessions. Contains the URL to redirect the user to complete the
   * authorization process.
   */
  href: string;
  type: string;
  resourceType: string;
};

export const externalProviderSessionSchema: Schema<ExternalProviderSession> =
  s.object<ExternalProviderSession>({
    href: s.string(),
    type: s.string(),
    resourceType: s.string(),
    _keysMap: {
      resourceType: "resource-type",
    },
  });
