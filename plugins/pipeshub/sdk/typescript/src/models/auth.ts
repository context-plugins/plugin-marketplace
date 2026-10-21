import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectorAuthSchemaForTypeSchema,
  type ConnectorAuthSchemaForType,
} from "./connector-auth-schema-for-type.js";
import { connectorAuthTypeSchema, type ConnectorAuthType } from "./connector-auth-type.js";
import { oauthConfigsSchema, type OauthConfigs } from "./oauth-configs.js";

export type Auth = {
  supportedAuthTypes?: ConnectorAuthType[];
  /** Auth form per auth type, keyed by ConnectorAuthType */
  schemas?: Record<string, ConnectorAuthSchemaForType>;
  values?: Record<string, unknown>;
  customFields?: Record<string, unknown>[];
  customValues?: Record<string, unknown>;
  conditionalDisplay?: Record<string, unknown>;
  /** Instance reads only */
  authorizeUrl?: string;
  /** Instance reads only */
  tokenUrl?: string;
  /** Instance reads only: provider endpoints per auth type */
  oauthConfigs?: Record<string, OauthConfigs>;
};

export const authSchema: Schema<Auth> = s.object<Auth>({
  supportedAuthTypes: s.optional(s.array(s.lazy(() => connectorAuthTypeSchema))),
  schemas: s.optional(
    s.record(
      s.string(),
      s.lazy(() => connectorAuthSchemaForTypeSchema),
    ),
  ),
  values: s.optional(s.record(s.string(), s.unknown())),
  customFields: s.optional(s.array(s.record(s.string(), s.unknown()))),
  customValues: s.optional(s.record(s.string(), s.unknown())),
  conditionalDisplay: s.optional(s.record(s.string(), s.unknown())),
  authorizeUrl: s.optional(s.string()),
  tokenUrl: s.optional(s.string()),
  oauthConfigs: s.optional(
    s.record(
      s.string(),
      s.lazy(() => oauthConfigsSchema),
    ),
  ),
});
