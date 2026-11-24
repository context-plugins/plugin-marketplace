import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Schedule = {
  /**
   * Delay in ms to display the bot's message to the user. This parameter is set by the bot admin
   * when creating the bot.
   */
  responseDelayMilliseconds: number;
};

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>({
  responseDelayMilliseconds: s.int(),
});
