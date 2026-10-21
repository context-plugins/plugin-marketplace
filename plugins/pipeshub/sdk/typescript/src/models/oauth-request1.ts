import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { config3Schema, type Config3 } from "./config3.js";

export type OauthRequest1 = {
  /** New name; must not be taken by another of the org's apps for this connector type. */
  oauthInstanceName?: string;
  /**
   * OAuth app fields to change, merged over the saved ones. Keys follow the connector type's OAuth
   * fields; a masked secret sent back as returned is ignored, so the saved value is kept.
   */
  config: Config3;
  /**
   * PipesHub's public origin. Used only when the stored configuration has no redirectUri yet, to
   * build one; an existing redirectUri is kept whether or not this is sent.
   */
  baseUrl?: string;
};

export const oauthRequest1Schema: Schema<OauthRequest1> = s.object<OauthRequest1>({
  oauthInstanceName: s.optional(s.string()),
  config: config3Schema,
  baseUrl: s.optional(s.string()),
});
