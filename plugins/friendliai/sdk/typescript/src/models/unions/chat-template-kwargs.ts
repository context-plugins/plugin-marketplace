import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Additional keyword arguments supplied to the template renderer. These parameters will be
 * available for use within the chat template.
 */
export type ChatTemplateKwargs = Record<string, unknown>;

export const chatTemplateKwargsSchema: Schema<ChatTemplateKwargs> = s.of<ChatTemplateKwargs>(
  s.union([s.record(s.string(), s.unknown())]),
);
