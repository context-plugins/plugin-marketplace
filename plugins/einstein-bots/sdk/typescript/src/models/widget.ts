import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * "Widget type of how answers appear in the client.
 *
 * * `buttons`—Answers appear in clickable pill boxes.
 * * `menu`—Answers appear in clickable boxes vertically stacked."
 */
export const Widget = {
  Buttons: "buttons",
  Menu: "menu",
} as const;
export type Widget = (typeof Widget)[keyof typeof Widget] | (string & {});

export const widgetSchema: EnumSchema<Widget> = s.enumOf<Widget>(Widget);
