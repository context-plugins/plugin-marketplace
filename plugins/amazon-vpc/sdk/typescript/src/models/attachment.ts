import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type Attachment = {
  /** The current state of the attachment */
  state?: State;
  /** The ID of the VPC */
  vpcId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>(
  {
    state: s.optional(s.lazy(() => stateSchema)),
    vpcId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
