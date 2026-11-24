import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { htmlSanitizationSchema, type HtmlSanitization } from "./html-sanitization.js";

/** Options for job processing. */
export type ProcessingOptions = {
  /**
   * If set to `true`, the service does not attempt to resolve a more precise address for the job.
   */
  disableStreetAddressResolution?: boolean;
  /**
   * Option for job HTML content sanitization. Applied fields are: * description *
   * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these
   * fields may be stripped if sanitiazation isn't disabled. Defaults to
   * HtmlSanitization.SIMPLE_FORMATTING_ONLY.
   */
  htmlSanitization?: HtmlSanitization;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingOptionsSchema: Schema<ProcessingOptions> = s.object<ProcessingOptions>(
  {
    disableStreetAddressResolution: s.optional(s.boolean()),
    htmlSanitization: s.optional(s.lazy(() => htmlSanitizationSchema)),
  },
  { additionalProperties: s.json() },
);
