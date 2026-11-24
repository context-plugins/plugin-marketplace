import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataPrivacy = {
  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify
   * whether your use of Amazon Lex is related to a website, program, or other application that is
   * directed or targeted, in whole or in part, to children under age 13 and subject to the
   * Children's Online Privacy Protection Act (COPPA) by specifying true or false in the
   * childDirected field. By specifying true in the childDirected field, you confirm that your use
   * of Amazon Lex is related to a website, program, or other application that is directed or
   * targeted, in whole or in part, to children under age 13 and
   */
  childDirected: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataPrivacySchema: Schema<DataPrivacy> = s.object<DataPrivacy>(
  {
    childDirected: s.boolean(),
  },
  { additionalProperties: s.json() },
);
