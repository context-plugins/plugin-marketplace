import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

export type FriendliBuiltInTool = {
  /** The type of the built-in tool provided by Friendli. */
  type: Type7;
};

export const friendliBuiltInToolSchema: Schema<FriendliBuiltInTool> = s.object<FriendliBuiltInTool>({
  type: type7Schema,
});
