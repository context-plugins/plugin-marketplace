import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason = {
  Malformed: "malformed",
  BadSignature: "bad_signature",
  WrongIssuer: "wrong_issuer",
  Expired: "expired",
  WrongAction: "wrong_action",
  InputMismatch: "input_mismatch",
  DestinationMismatch: "destination_mismatch",
  ArtifactMismatch: "artifact_mismatch",
  WrongOrganisation: "wrong_organisation",
  UnsignedDeployment: "unsigned_deployment",
  AgentsStopped: "agents_stopped",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
