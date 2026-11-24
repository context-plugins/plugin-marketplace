import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { variableSchema, type Variable } from "./unions/variable.js";

/** Update existing session variables */
export type SetVariablesMessage = {
  /** Message type @default "setVariables" */
  type?: "setVariables";
  /**
   * Client-generated sequence number of the message in a session. Increase this number for each
   * subsequent message.
   */
  sequenceId: number;
  /**
   * Array of custom and context variables passed to the bot when initiating a session (see [What’s
   * a
   * Variable?](https://help.salesforce.com/s/articleView?id=sf.bots_service_whats_a_variable.htm&type=5&_ga=2.50520745.1281711304.1657558186-1967832163.1652719780)).
   */
  variables: Variable[] | null;
};

export const setVariablesMessageSchema: Schema<SetVariablesMessage> = s.object<SetVariablesMessage>({
  type: s.defaulted(s.literal("setVariables"), "setVariables"),
  sequenceId: s.int(),
  variables: s.nullable(s.array(s.lazy(() => variableSchema))),
});
