import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Email channel configurations. */
export type EmailConfigurations = {
  /** The domain to use for sending emails. Must be authenticated in SendGrid. */
  sendingDomain: string;
};

export const emailConfigurationsSchema: Schema<EmailConfigurations> = s.object<EmailConfigurations>({
  sendingDomain: s.string(),
  _keysMap: {
    sendingDomain: "sending_domain",
  },
});
