import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rulesSchema, type Rules } from "./unions/rules.js";
import {
  sipTransferMode1ModelSchema,
  type SipTransferMode1Model,
} from "./unions/sip-transfer-mode1-model.js";

export type DirectoryExtensionNumber = {
  /** Phone number or SIP URI */
  number: string;
  /**
   * Directory extension number rules. To include a language rule, use key "language" with a
   * language code value.
   */
  rules?: Rules;
  /** How to perform the SIP transfer, INVITE or REFER. */
  sipTransferMode?: SipTransferMode1Model;
};

export const directoryExtensionNumberSchema: Schema<DirectoryExtensionNumber> =
  s.object<DirectoryExtensionNumber>({
    number: s.string(),
    rules: s.optional(s.lazy(() => rulesSchema)),
    sipTransferMode: s.optional(s.lazy(() => sipTransferMode1ModelSchema)),
    _keysMap: {
      sipTransferMode: "sip_transfer_mode",
    },
  });
