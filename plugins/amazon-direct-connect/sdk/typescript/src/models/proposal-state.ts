import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the proposal. The following are possible values: accepted: The proposal has been
 * accepted. The Direct Connect gateway association is available to use in this state. deleted: The
 * proposal has been deleted by the owner that made the proposal. The Direct Connect gateway
 * association cannot be used in this state. requested: The proposal has been requested. The Direct
 * Connect gateway association cannot be used in this state.
 */
export const ProposalState = {
  Requested: "requested",
  Accepted: "accepted",
  Deleted: "deleted",
} as const;
export type ProposalState = (typeof ProposalState)[keyof typeof ProposalState] | (string & {});

export const proposalStateSchema: EnumSchema<ProposalState> = s.enumOf<ProposalState>(ProposalState);
