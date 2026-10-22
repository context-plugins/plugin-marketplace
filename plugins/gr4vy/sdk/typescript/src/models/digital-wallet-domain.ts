import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DigitalWalletDomain = {
  /** The domain to add or remove. */
  domainName: string;
};

export const digitalWalletDomainSchema: Schema<DigitalWalletDomain> = s.object<DigitalWalletDomain>({
  domainName: s.string(),
  _keysMap: {
    domainName: "domain_name",
  },
});
