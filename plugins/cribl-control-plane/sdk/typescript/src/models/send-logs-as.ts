import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The content type to use when sending logs */
export const SendLogsAs = {
  Text: "text",
  Json: "json",
} as const;
export type SendLogsAs = (typeof SendLogsAs)[keyof typeof SendLogsAs] | (string & {});

export const sendLogsAsSchema: EnumSchema<SendLogsAs> = s.enumOf<SendLogsAs>(SendLogsAs);
