import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * bu-ultrafast and bu-fast are early-access ultrafast presets; they take no modelParams and are
 * rejected for projects without access.
 */
export const Model = {
  MimoV26Pro: "mimo-v2.6-pro",
  MimoV26Flash: "mimo-v2.6-flash",
  DeepseekV41Flash: "deepseek-v4.1-flash",
  Glm52: "glm-5.2",
  Grok45: "grok-4.5",
  Grok46: "grok-4.6",
  Glm53Flash: "glm-5.3-flash",
  DeepseekV4FlashVision: "deepseek-v4-flash-vision",
  KimiK3: "kimi-k3",
  MinimaxM3: "minimax-m3",
  ClaudeOpus47: "claude-opus-4.7",
  ClaudeOpus48: "claude-opus-4.8",
  ClaudeOpus5: "claude-opus-5",
  ClaudeOpus55: "claude-opus-5-5",
  ClaudeFable5: "claude-fable-5",
  ClaudeSonnet5: "claude-sonnet-5",
  ClaudeSonnet55: "claude-sonnet-5-5",
  Gpt55: "gpt-5.5",
  Gpt56: "gpt-5.6",
  Gpt6Astra: "gpt-6-astra",
  Gpt6Sol: "gpt-6-sol",
  Gpt61Sol: "gpt-6.1-sol",
  Gpt6Luna: "gpt-6-luna",
  Gpt56Sol: "gpt-5.6-sol",
  Gpt56Terra: "gpt-5.6-terra",
  Gpt56Luna: "gpt-5.6-luna",
  Gemini36Flash: "gemini-3.6-flash",
  Gemini35Flash: "gemini-3.5-flash",
  Gemini31Pro: "gemini-3.1-pro",
  Gemini3Flash: "gemini-3-flash",
  BuUltrafast: "bu-ultrafast",
  BuFast: "bu-fast",
} as const;
export type Model = (typeof Model)[keyof typeof Model] | (string & {});

export const modelSchema: EnumSchema<Model> = s.enumOf<Model>(Model);
