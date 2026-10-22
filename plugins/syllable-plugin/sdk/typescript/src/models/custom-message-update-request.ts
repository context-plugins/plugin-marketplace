import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customMessageRuleSchema, type CustomMessageRule } from "./custom-message-rule.js";
import { customMessageType1Schema, type CustomMessageType1 } from "./custom-message-type1.js";
import { label2Schema, type Label2 } from "./unions/label2.js";
import { preambleSchema, type Preamble } from "./unions/preamble.js";
import {
  repeatAfterLanguageChangeSchema,
  type RepeatAfterLanguageChange,
} from "./unions/repeat-after-language-change.js";
import { subjectSchema, type Subject } from "./unions/subject.js";

/** Request model to update an existing custom message. */
export type CustomMessageUpdateRequest = {
  /** The name of the custom message */
  name: string;
  /** Type of the custom message: greeting (voice) or email_template. */
  type?: CustomMessageType1;
  /**
   * An optional preamble that will be delivered before the main message, regardless of whether the
   * current time and date match a rule or the system uses the default message. Cannot contain the
   * "{{ language.mode }}" tag. In the case of a voice conversation, the user will not be able to
   * interrupt the preamble. Can be used for e.g. legal disclaimers that the user must always
   * see/hear.
   */
  preamble?: Preamble;
  /**
   * The default message that the agent will deliver if no rules are set or no rules match the
   * current timestamp. For email_template, this is the body.
   */
  text: string;
  /** Email subject. Required for email_template (in type_config); ignored otherwise. */
  subject?: Subject;
  /** The label of the custom message */
  label?: Label2;
  /**
   * If true, if the caller changes language using the language menu in the custom message, the
   * message will be repeated in the new language (not including the language menu). If omitted or
   * null on create, false is stored. If omitted or null on update, existing value will not be
   * changed.
   */
  repeatAfterLanguageChange?: RepeatAfterLanguageChange;
  /** Rules for time-specific message variants */
  rules?: CustomMessageRule[];
  /** The ID of the custom message */
  id: number;
};

export const customMessageUpdateRequestSchema: Schema<CustomMessageUpdateRequest> =
  s.object<CustomMessageUpdateRequest>({
    name: s.string(),
    type: s.optional(s.lazy(() => customMessageType1Schema)),
    preamble: s.optional(s.lazy(() => preambleSchema)),
    text: s.string(),
    subject: s.optional(s.lazy(() => subjectSchema)),
    label: s.optional(s.lazy(() => label2Schema)),
    repeatAfterLanguageChange: s.optional(s.lazy(() => repeatAfterLanguageChangeSchema)),
    rules: s.optional(s.array(s.lazy(() => customMessageRuleSchema))),
    id: s.int(),
    _keysMap: {
      repeatAfterLanguageChange: "repeat_after_language_change",
    },
  });
