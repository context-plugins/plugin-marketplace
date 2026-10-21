import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncidentOrganizationResponse = {
  id: number;
  name: string;
  displayName: string;
};

export const incidentOrganizationResponseSchema: Schema<IncidentOrganizationResponse> =
  s.object<IncidentOrganizationResponse>({
    id: s.int(),
    name: s.string(),
    displayName: s.string(),
    _keysMap: {
      displayName: "display_name",
    },
  });
