import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./unions/auth-type.js";
import { authValueKeys1Schema, type AuthValueKeys1 } from "./unions/auth-value-keys1.js";
import { lastUpdatedComments3Schema, type LastUpdatedComments3 } from "./unions/last-updated-comments3.js";

/** Response model for service operations. A service is a collection of tools. */
export type ServiceResponse = {
  /** The internal ID of the service */
  id: number;
  /** The name of the service */
  name: string;
  /** The description of the service */
  description: string;
  /** The type of authentication to use for the service's tools */
  authType?: AuthType;
  /** Auth value keys (values omitted for security) */
  authValueKeys?: AuthValueKeys1;
  /** Free text providing comment about what was updated */
  lastUpdatedComments?: LastUpdatedComments3;
  /** The timestamp of the most recent update to the service */
  lastUpdated: Date;
  /** The email of the user who last updated the service */
  lastUpdatedBy: string;
  /** Names of tools that belong to the service */
  tools: string[];
};

export const serviceResponseSchema: Schema<ServiceResponse> = s.object<ServiceResponse>({
  id: s.int(),
  name: s.string(),
  description: s.string(),
  authType: s.optional(s.lazy(() => authTypeSchema)),
  authValueKeys: s.optional(s.lazy(() => authValueKeys1Schema)),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedComments3Schema)),
  lastUpdated: s.dateTime(),
  lastUpdatedBy: s.string(),
  tools: s.array(s.string()),
  _keysMap: {
    authType: "auth_type",
    authValueKeys: "auth_value_keys",
    lastUpdatedComments: "last_updated_comments",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
  },
});
