import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Raw Twilio Lookup v2 line type of the target number (e.g. 'mobile', 'landline', 'fixedVoip',
 * 'tollFree'); resolved at ingestion. 'unknown' means Twilio answered but could not determine the
 * line type; None means no lookup data at all. See ALL_LINE_TYPES in lib/twilio/line_type_lookup.py
 * for the full vocabulary.
 */
export type LineType = string;

export const lineTypeSchema: Schema<LineType> = s.of<LineType>(s.union([s.string()]));
