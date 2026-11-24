import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adminSetStateSchema, type AdminSetState } from "./admin-set-state.js";

export type Endpoint = {
  adminSetState?: AdminSetState;
  /** the unique id of the endpoint */
  agentUuid?: string;
  /** the unique id of the active user on the endpoint */
  userUuid?: string;
  /** the current version of the endpoint */
  agentVersion?: string;
  /** type of ISA for computer processors */
  binaryType?: string;
  /** the name of the city where the endpoint is located */
  cityName?: string;
  /** the name of the region where the endpoint is located */
  region?: string;
  /** the name of the country where the endpoint is located */
  countryName?: string;
  /** the type of CPU on the device hosting the endpoint */
  cpuFamily?: string;
  /**
   * indicates the debug state of the endpoint. 0 means not in debug, 1 means set to debug, 2 means
   * acknowledged receipt of debug request
   */
  debugState?: string;
  /** the name of the device hosting the endpoint */
  deviceName?: string;
  /** indicates if the endpoint is disabled or not */
  disableMode?: boolean;
  /** additional details regarding an error */
  errorMessage?: string;
  /** indicates if the endpoint is in fallback mode */
  fallbackMode?: boolean;
  /** the date and time when the endpoint last updated the configuration */
  configurationLastUpdated?: Date;
  /** Operating System version of the device */
  osVersion?: string;
  /** name of the policy that is being used by the endpoint */
  policyName?: string;
  /** indicates if the endpoint has an active web-socket connection */
  realtimeConnection?: boolean;
  /** the current operational status of the endpoint */
  status?: string;
  /** the date and time when the endpoint was last seen */
  lastSeen?: Date;
  /**
   * the user id of the user that is using the endpoint. `userId` for OIDC users is usually their
   * email address.
   */
  userId?: string;
  /** the email of the user that is using the endpoint */
  emailId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const endpointSchema: Schema<Endpoint> = s.object<Endpoint>(
  {
    adminSetState: s.optional(s.lazy(() => adminSetStateSchema)),
    agentUuid: s.optional(s.string()),
    userUuid: s.optional(s.string()),
    agentVersion: s.optional(s.string()),
    binaryType: s.optional(s.string()),
    cityName: s.optional(s.string()),
    region: s.optional(s.string()),
    countryName: s.optional(s.string()),
    cpuFamily: s.optional(s.string()),
    debugState: s.optional(s.string()),
    deviceName: s.optional(s.string()),
    disableMode: s.optional(s.boolean()),
    errorMessage: s.optional(s.string()),
    fallbackMode: s.optional(s.boolean()),
    configurationLastUpdated: s.optional(s.dateTime()),
    osVersion: s.optional(s.string()),
    policyName: s.optional(s.string()),
    realtimeConnection: s.optional(s.boolean()),
    status: s.optional(s.string()),
    lastSeen: s.optional(s.dateTime()),
    userId: s.optional(s.string()),
    emailId: s.optional(s.string()),
    _keysMap: {
      agentUuid: "agentUUID",
      userUuid: "userUUID",
    },
  },
  { additionalProperties: s.json() },
);
