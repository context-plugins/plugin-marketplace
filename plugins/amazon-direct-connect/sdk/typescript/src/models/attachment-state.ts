import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the attachment. The following are the possible values: attaching: The initial state
 * after a virtual interface is created using the Direct Connect gateway. attached: The Direct
 * Connect gateway and virtual interface are attached and ready to pass traffic. detaching: The
 * initial state after calling DeleteVirtualInterface. detached: The virtual interface is detached
 * from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual
 * interface is stopped.
 */
export const AttachmentState = {
  Attaching: "attaching",
  Attached: "attached",
  Detaching: "detaching",
  Detached: "detached",
} as const;
export type AttachmentState = (typeof AttachmentState)[keyof typeof AttachmentState] | (string & {});

export const attachmentStateSchema: EnumSchema<AttachmentState> = s.enumOf<AttachmentState>(AttachmentState);
