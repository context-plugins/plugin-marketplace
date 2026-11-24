import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** API configuration parameters. */
export type ForceConfig = {
  /**
   * Instance URL of your Salesforce org. You can find the value in the **ForceConfig Endpoint**
   * field of the **Add Connection** dialog when you add the connected app to the bot (see [Get
   * Started with Einstein Bot
   * API](https://developer.salesforce.com/docs/service/einstein-bot-api/guide/prerequisites.html)).
   */
  endpoint: string;
};

export const forceConfigSchema: Schema<ForceConfig> = s.object<ForceConfig>({
  endpoint: s.string(),
});
