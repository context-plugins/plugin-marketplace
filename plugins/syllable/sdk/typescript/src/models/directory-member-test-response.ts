import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { extensionSchema, type Extension } from "./unions/extension.js";
import { sipTransferMode1Schema, type SipTransferMode1 } from "./unions/sip-transfer-mode1.js";
import { status1Schema, type Status1 } from "./unions/status1.js";

export type DirectoryMemberTestResponse = {
  /**
   * Extension to which the user will be transferred if they call at the provided timestamp in the
   * given language, or a status message if no rules match
   */
  extension?: Extension;
  /** Status message if no rules match */
  status?: Status1;
  /** SIP transfer mode. */
  sipTransferMode?: SipTransferMode1;
};

export const directoryMemberTestResponseSchema: Schema<DirectoryMemberTestResponse> =
  s.object<DirectoryMemberTestResponse>({
    extension: s.optional(s.lazy(() => extensionSchema)),
    status: s.optional(s.lazy(() => status1Schema)),
    sipTransferMode: s.optional(s.lazy(() => sipTransferMode1Schema)),
    _keysMap: {
      sipTransferMode: "sip_transfer_mode",
    },
  });
