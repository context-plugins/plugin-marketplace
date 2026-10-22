import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsAzureBlobAuthTypeManualSchema,
  type AuthTypeOptionsAzureBlobAuthTypeManual,
} from "./auth-type-options-azure-blob-auth-type-manual.js";

export type AzureBlobAuthTypeManual = {
  /** Discriminator value. */
  authType?: AuthTypeOptionsAzureBlobAuthTypeManual;
  /**
   * Enter your Azure storage account Connection String. If left blank, Cribl Stream will fall back
   * to env.AZURE_STORAGE_CONNECTION_STRING.
   */
  connectionString: string;
  /**
   * Binds 'connectionString' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'connectionString' at runtime.
   */
  templateConnectionString?: string;
};

export const azureBlobAuthTypeManualSchema: Schema<AzureBlobAuthTypeManual> =
  s.object<AzureBlobAuthTypeManual>({
    authType: s.optional(s.lazy(() => authTypeOptionsAzureBlobAuthTypeManualSchema)),
    connectionString: s.string(),
    templateConnectionString: s.optional(s.string()),
    _keysMap: {
      templateConnectionString: "__template_connectionString",
    },
  });
