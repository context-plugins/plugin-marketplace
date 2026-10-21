import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An optional preamble that will be delivered before the main message, regardless of whether the
 * current time and date match a rule or the system uses the default message. Cannot contain the "{{
 * language.mode }}" tag. In the case of a voice conversation, the user will not be able to
 * interrupt the preamble. Can be used for e.g. legal disclaimers that the user must always
 * see/hear.
 */
export type Preamble = string;

export const preambleSchema: Schema<Preamble> = s.of<Preamble>(s.union([s.string()]));
