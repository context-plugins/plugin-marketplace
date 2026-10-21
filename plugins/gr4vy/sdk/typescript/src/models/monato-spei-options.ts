import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MonatoSpeiOptions = {
  /** Approval URL that will receive a charge payment method reference. */
  approvalUrl: string;
};

export const monatoSpeiOptionsSchema: Schema<MonatoSpeiOptions> = s.object<MonatoSpeiOptions>({
  approvalUrl: s.string(),
  _keysMap: {
    approvalUrl: "approval_url",
  },
});
