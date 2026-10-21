import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Analytics-only signal (product snapshot) describing WHERE the action's read/write determination
 * came from. Complementary to the effective read/write value (the tool's ToolType, which drives
 * HITL): the value says read-or-write, this says how confident that is. MCP_ANNOTATION = from the
 * tool's read-only/destructive hints; ADMIN_OVERRIDE = an admin set it; NONE = no usable hint (the
 * effective value then defaults to write); NATIVE_TOOL_DEFINITION = from a curated native tool
 * (snapshot-derived). Does not affect runtime behavior.
 */
export const ActionTypeSource = {
  McpAnnotation: "MCP_ANNOTATION",
  AdminOverride: "ADMIN_OVERRIDE",
  None: "NONE",
  NativeToolDefinition: "NATIVE_TOOL_DEFINITION",
} as const;
export type ActionTypeSource = (typeof ActionTypeSource)[keyof typeof ActionTypeSource] | (string & {});

export const actionTypeSourceSchema: EnumSchema<ActionTypeSource> =
  s.enumOf<ActionTypeSource>(ActionTypeSource);
