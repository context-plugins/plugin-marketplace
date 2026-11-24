import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StatePlinthUsGrantsDataOrganizationsApi = Record<string, unknown>;

export const statePlinthUsGrantsDataOrganizationsApiSchema: Schema<StatePlinthUsGrantsDataOrganizationsApi> =
  s.of<StatePlinthUsGrantsDataOrganizationsApi>(s.union([s.record(s.string(), s.unknown())]));
