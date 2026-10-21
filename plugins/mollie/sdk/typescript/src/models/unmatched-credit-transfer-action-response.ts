import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailsSchema, type Details } from "./details.js";
import { links33Schema, type Links33 } from "./links33.js";
import {
  unmatchedCreditTransferActionStatusSchema,
  type UnmatchedCreditTransferActionStatus,
} from "./unmatched-credit-transfer-action-status.js";
import {
  unmatchedCreditTransferActionTypeSchema,
  type UnmatchedCreditTransferActionType,
} from "./unmatched-credit-transfer-action-type.js";

export type UnmatchedCreditTransferActionResponse = {
  /** The resource type of the object. */
  resource: string;
  /** The identifier uniquely referring to this unmatched credit transfer action. */
  id: string;
  /** The identifier of the unmatched credit transfer this action belongs to. */
  unmatchedCreditTransferId: string;
  /** The action performed on the unmatched credit transfer. */
  action: UnmatchedCreditTransferActionType;
  /** The current status of the action. */
  status: UnmatchedCreditTransferActionStatus;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /** Additional details about the action. */
  details?: Details;
  /** Links to related resources. */
  links: Links33;
};

export const unmatchedCreditTransferActionResponseSchema: Schema<UnmatchedCreditTransferActionResponse> =
  s.object<UnmatchedCreditTransferActionResponse>({
    resource: s.string(),
    id: s.string(),
    unmatchedCreditTransferId: s.string(),
    action: unmatchedCreditTransferActionTypeSchema,
    status: unmatchedCreditTransferActionStatusSchema,
    createdAt: s.string(),
    details: s.optional(s.lazy(() => detailsSchema)),
    links: links33Schema,
    _keysMap: {
      links: "_links",
    },
  });
