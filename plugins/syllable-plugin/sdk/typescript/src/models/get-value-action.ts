import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Action5, action5Schema } from "./action5.js";
import { ifSchema, type If } from "./unions/if.js";
import { inputs1Schema, type Inputs1 } from "./unions/inputs1.js";
import { valueSchema, type Value } from "./unions/value.js";
import { valuefromSchema, type Valuefrom } from "./unions/valuefrom.js";

export type GetValueAction = {
  /** Initial value of the variable. */
  value?: Value;
  /**
   * Expression that computes the value. Supported expression forms: (1) JMESPath string (default
   * for plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or
   * (3) typed CEL object {"type":"cel","expression":"..."}. Mutually exclusive with value.
   */
  valueFrom?: Valuefrom;
  /**
   * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
   * (default for plain strings), (2) typed JMESPath object
   * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
   * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent ==
   * `true`".
   */
  if?: If;
  /** Populate default input values. @default Action5.Get */
  action?: Action5;
  /** Input field names to populate; None populates all step inputs. */
  inputs?: Inputs1;
  /** If False (default), only populate empty inputs. If True, always overwrite. @default false */
  overwrite?: boolean;
};

export const getValueActionSchema: Schema<GetValueAction> = s.object<GetValueAction>({
  value: s.optional(s.lazy(() => valueSchema)),
  valueFrom: s.optional(s.lazy(() => valuefromSchema)),
  if: s.optional(s.lazy(() => ifSchema)),
  action: s.defaulted(action5Schema, Action5.Get),
  inputs: s.optional(s.lazy(() => inputs1Schema)),
  overwrite: s.defaulted(s.boolean(), false),
});
