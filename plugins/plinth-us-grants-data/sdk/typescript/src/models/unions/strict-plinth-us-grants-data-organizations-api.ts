import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Reject the request if any filter could not be honored. */
export type StrictPlinthUsGrantsDataOrganizationsApi = boolean;

export const strictPlinthUsGrantsDataOrganizationsApiSchema: Schema<StrictPlinthUsGrantsDataOrganizationsApi> =
  s.of<StrictPlinthUsGrantsDataOrganizationsApi>(s.union([s.boolean()]));
