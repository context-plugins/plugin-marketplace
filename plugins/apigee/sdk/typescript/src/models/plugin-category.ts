import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The category of the plugin, identifying its primary category or purpose. This field is
 * required for all plugins.
 */
export const PluginCategory = {
  PluginCategoryUnspecified: "PLUGIN_CATEGORY_UNSPECIFIED",
  ApiGateway: "API_GATEWAY",
  ApiProducer: "API_PRODUCER",
} as const;
export type PluginCategory = (typeof PluginCategory)[keyof typeof PluginCategory] | (string & {});

export const pluginCategorySchema: EnumSchema<PluginCategory> = s.enumOf<PluginCategory>(PluginCategory);
