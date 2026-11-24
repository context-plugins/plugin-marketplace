import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InetNum = {
  startIp?: string;
  endIp?: string;
  cidr?: string[];
  netName?: string;
  netHandle?: string;
  description?: string[];
  countries?: string[];
  geofeed?: string;
  latitude?: number;
  longitude?: number;
  city?: string;
  languages?: string[];
  status?: string;
  organization?: string;
  sponsoringOrganization?: string;
  remarks?: string[];
  assignmentSize?: string;
  notify?: string[];
  mntBy?: string[];
  mntLower?: string[];
  mntDomains?: string[];
  mntRoutes?: string[];
  mntIrt?: string[];
  dateCreated?: string;
  dateUpdated?: string;
  source?: string;
  parents?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inetNumSchema: Schema<InetNum> = s.object<InetNum>(
  {
    startIp: s.optional(s.string()),
    endIp: s.optional(s.string()),
    cidr: s.optional(s.array(s.string())),
    netName: s.optional(s.string()),
    netHandle: s.optional(s.string()),
    description: s.optional(s.array(s.string())),
    countries: s.optional(s.array(s.string())),
    geofeed: s.optional(s.string()),
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
    city: s.optional(s.string()),
    languages: s.optional(s.array(s.string())),
    status: s.optional(s.string()),
    organization: s.optional(s.string()),
    sponsoringOrganization: s.optional(s.string()),
    remarks: s.optional(s.array(s.string())),
    assignmentSize: s.optional(s.string()),
    notify: s.optional(s.array(s.string())),
    mntBy: s.optional(s.array(s.string())),
    mntLower: s.optional(s.array(s.string())),
    mntDomains: s.optional(s.array(s.string())),
    mntRoutes: s.optional(s.array(s.string())),
    mntIrt: s.optional(s.array(s.string())),
    dateCreated: s.optional(s.string()),
    dateUpdated: s.optional(s.string()),
    source: s.optional(s.string()),
    parents: s.optional(s.array(s.string())),
    _keysMap: {
      startIp: "start_ip",
      endIp: "end_ip",
      netName: "net_name",
      netHandle: "net_handle",
      sponsoringOrganization: "sponsoring_organization",
      assignmentSize: "assignment_size",
      mntBy: "mnt_by",
      mntLower: "mnt_lower",
      mntDomains: "mnt_domains",
      mntRoutes: "mnt_routes",
      mntIrt: "mnt_irt",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  },
  { additionalProperties: s.json() },
);
