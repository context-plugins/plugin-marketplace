import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A party involved in the balance transfer, either the sender or the receiver. */
export type EntityBalanceTransferParty = {
  /**
   * Defines the type of the party. At the moment, only `organization` is supported.
   *
   * @default "organization"
   */
  type?: "organization";
  /**
   * Identifier of the party. For example, this contains the organization token if the type is
   * `organization`.
   */
  id: string;
  /**
   * The transfer description for the transfer party. This is the description that will appear in
   * the financial reports of the party.
   */
  description: string;
};

export const entityBalanceTransferPartySchema: Schema<EntityBalanceTransferParty> =
  s.object<EntityBalanceTransferParty>({
    type: s.defaulted(s.literal("organization"), "organization"),
    id: s.string(),
    description: s.string(),
  });
