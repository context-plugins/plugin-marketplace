import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentStateSchema, type AttachmentState } from "./attachment-state.js";
import { attachmentTypeSchema, type AttachmentType } from "./attachment-type.js";

export type DirectConnectGatewayAttachment = {
  /** The ID of the Direct Connect gateway. */
  directConnectGatewayId?: string;
  /** The ID of the virtual interface. */
  virtualInterfaceId?: string;
  /** The Amazon Web Services Region where the virtual interface is located. */
  virtualInterfaceRegion?: string;
  /** The ID of the Amazon Web Services account that owns the virtual interface. */
  virtualInterfaceOwnerAccount?: string;
  /**
   * The state of the attachment. The following are the possible values: attaching: The initial
   * state after a virtual interface is created using the Direct Connect gateway. attached: The
   * Direct Connect gateway and virtual interface are attached and ready to pass traffic. detaching:
   * The initial state after calling DeleteVirtualInterface. detached: The virtual interface is
   * detached from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and
   * virtual interface is stopped.
   */
  attachmentState?: AttachmentState;
  /** The type of attachment. */
  attachmentType?: AttachmentType;
  /** The error message if the state of an object failed to advance. */
  stateChangeError?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directConnectGatewayAttachmentSchema: Schema<DirectConnectGatewayAttachment> =
  s.object<DirectConnectGatewayAttachment>(
    {
      directConnectGatewayId: s.optional(s.string()),
      virtualInterfaceId: s.optional(s.string()),
      virtualInterfaceRegion: s.optional(s.string()),
      virtualInterfaceOwnerAccount: s.optional(s.string()),
      attachmentState: s.optional(s.lazy(() => attachmentStateSchema)),
      attachmentType: s.optional(s.lazy(() => attachmentTypeSchema)),
      stateChangeError: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
