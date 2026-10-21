import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";

export type Notice = {
  /**
   * How much weight to give the message.
   * * `info`: for awareness; nothing to do.
   * * `warning`: worth relaying to the user before continuing.
   * * `blocking`: the request was not served; the text says what unblocks it.
   */
  severity: Severity;
  /**
   * The tip or guidance, in plain text. Show it as-is or follow it; the wording may change between
   * releases.
   */
  text: string;
};

export const noticeSchema: Schema<Notice> = s.object<Notice>({
  severity: severitySchema,
  text: s.string(),
});
