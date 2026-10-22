import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectorsResponse3 = {
  success: boolean;
  message: string;
  connectorId: string;
  /** @default "DELETING" */
  status?: "DELETING";
};

export const connectorsResponse3Schema: Schema<ConnectorsResponse3> = s.object<ConnectorsResponse3>({
  success: s.boolean(),
  message: s.string(),
  connectorId: s.string(),
  status: s.defaulted(s.literal("DELETING"), "DELETING"),
});
