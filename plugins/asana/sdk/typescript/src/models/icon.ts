import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The icon for a project. */
export const Icon = {
  List: "list",
  Board: "board",
  Timeline: "timeline",
  Calendar: "calendar",
  Rocket: "rocket",
  People: "people",
  Graph: "graph",
  Star: "star",
  Bug: "bug",
  LightBulb: "light_bulb",
  Globe: "globe",
  Gear: "gear",
  Notebook: "notebook",
  Computer: "computer",
  Check: "check",
  Target: "target",
  Html: "html",
  Megaphone: "megaphone",
  ChatBubbles: "chat_bubbles",
  Briefcase: "briefcase",
  PageLayout: "page_layout",
  MountainFlag: "mountain_flag",
  Puzzle: "puzzle",
  Presentation: "presentation",
  LineAndSymbols: "line_and_symbols",
  SpeedDial: "speed_dial",
  Ribbon: "ribbon",
  Shoe: "shoe",
  ShoppingBasket: "shopping_basket",
  Map: "map",
  Ticket: "ticket",
  Coins: "coins",
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon] | (string & {});

export const iconSchema: EnumSchema<Icon> = s.enumOf<Icon>(Icon);
