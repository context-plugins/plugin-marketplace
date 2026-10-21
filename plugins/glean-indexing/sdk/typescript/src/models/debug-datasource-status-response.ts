import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { datasourceVisibilitySchema, type DatasourceVisibility } from "./datasource-visibility.js";
import { documentsSchema, type Documents } from "./documents.js";
import { identitySchema, type Identity } from "./identity.js";

/** Describes the response body of the /debug/{datasource}/status API call */
export type DebugDatasourceStatusResponse = {
  documents?: Documents;
  identity?: Identity;
  /**
   * The visibility of the datasource, an enum of VISIBLE_TO_ALL, VISIBLE_TO_TEST_GROUP, NOT_VISIBLE
   */
  datasourceVisibility?: DatasourceVisibility;
};

export const debugDatasourceStatusResponseSchema: Schema<DebugDatasourceStatusResponse> =
  s.object<DebugDatasourceStatusResponse>({
    documents: s.optional(s.lazy(() => documentsSchema)),
    identity: s.optional(s.lazy(() => identitySchema)),
    datasourceVisibility: s.optional(s.lazy(() => datasourceVisibilitySchema)),
  });
