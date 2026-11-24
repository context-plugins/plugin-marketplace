import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUiPathOrchestratorFoldersApiSchema,
  type ValueUiPathOrchestratorFoldersApi,
} from "./value-ui-path-orchestrator-folders-api.js";

/** OData collection response containing folders */
export type ODataFolderCollection = {
  value?: ValueUiPathOrchestratorFoldersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataFolderCollectionSchema: Schema<ODataFolderCollection> = s.object<ODataFolderCollection>(
  {
    value: s.optional(s.array(s.lazy(() => valueUiPathOrchestratorFoldersApiSchema))),
  },
  { additionalProperties: s.json() },
);
