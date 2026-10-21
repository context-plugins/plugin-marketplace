import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A group of related actions to allow. Specify either <code>actionSet</code> or
 * <code>actions</code>. Use <code>maintainTeam</code> to add team maintainers.
 */
export const ActionSet = {
  MaintainTeam: "maintainTeam",
} as const;
export type ActionSet = (typeof ActionSet)[keyof typeof ActionSet] | (string & {});

export const actionSetSchema: EnumSchema<ActionSet> = s.enumOf<ActionSet>(ActionSet);
