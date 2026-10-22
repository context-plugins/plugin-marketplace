import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MonitoringDebouncingIncidentPolicyParams = {
  createAfterN: number;
  closeAfterN: number;
};

export const monitoringDebouncingIncidentPolicyParamsSchema: Schema<MonitoringDebouncingIncidentPolicyParams> =
  s.object<MonitoringDebouncingIncidentPolicyParams>({
    createAfterN: s.int(),
    closeAfterN: s.int(),
    _keysMap: {
      createAfterN: "create_after_n",
      closeAfterN: "close_after_n",
    },
  });
