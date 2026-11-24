import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type ResiliencyGroupAssociation = {
  /** The ID of the resiliency group. */
  resiliencyGroupId?: string;
  /** The Amazon Resource Name (ARN) of the associated connection. */
  connectionArn?: string;
  /**
   * The state of the association. The valid values are associating, associated, disassociating, and
   * disassociated.
   */
  state?: State;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resiliencyGroupAssociationSchema: Schema<ResiliencyGroupAssociation> =
  s.object<ResiliencyGroupAssociation>(
    {
      resiliencyGroupId: s.optional(s.string()),
      connectionArn: s.optional(s.string()),
      state: s.optional(s.lazy(() => stateSchema)),
    },
    { additionalProperties: s.json() },
  );
