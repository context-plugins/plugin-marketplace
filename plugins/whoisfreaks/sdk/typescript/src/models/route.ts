import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Route = {
  route?: string;
  description?: string[];
  origin?: string;
  pingable?: string[];
  pingHdl?: string[];
  holes?: string[];
  country?: string;
  organizations?: string[];
  memberOf?: string[];
  inject?: string[];
  aggrMtd?: string;
  aggrBndry?: string;
  exportComps?: string;
  components?: string;
  remarks?: string[];
  notify?: string[];
  mntLower?: string[];
  mntRoutes?: string[];
  mntBy?: string[];
  dateCreated?: string;
  dateUpdated?: string;
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const routeSchema: Schema<Route> = s.object<Route>(
  {
    route: s.optional(s.string()),
    description: s.optional(s.array(s.string())),
    origin: s.optional(s.string()),
    pingable: s.optional(s.array(s.string())),
    pingHdl: s.optional(s.array(s.string())),
    holes: s.optional(s.array(s.string())),
    country: s.optional(s.string()),
    organizations: s.optional(s.array(s.string())),
    memberOf: s.optional(s.array(s.string())),
    inject: s.optional(s.array(s.string())),
    aggrMtd: s.optional(s.string()),
    aggrBndry: s.optional(s.string()),
    exportComps: s.optional(s.string()),
    components: s.optional(s.string()),
    remarks: s.optional(s.array(s.string())),
    notify: s.optional(s.array(s.string())),
    mntLower: s.optional(s.array(s.string())),
    mntRoutes: s.optional(s.array(s.string())),
    mntBy: s.optional(s.array(s.string())),
    dateCreated: s.optional(s.string()),
    dateUpdated: s.optional(s.string()),
    source: s.optional(s.string()),
    _keysMap: {
      pingHdl: "ping_hdl",
      memberOf: "member_of",
      aggrMtd: "aggr_mtd",
      aggrBndry: "aggr_bndry",
      exportComps: "export_comps",
      mntLower: "mnt_lower",
      mntRoutes: "mnt_routes",
      mntBy: "mnt_by",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  },
  { additionalProperties: s.json() },
);
