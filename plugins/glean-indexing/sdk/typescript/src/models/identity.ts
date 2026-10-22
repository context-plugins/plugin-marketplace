import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  debugDatasourceStatusIdentityResponseComponentSchema,
  type DebugDatasourceStatusIdentityResponseComponent,
} from "./debug-datasource-status-identity-response-component.js";
import { processingHistoryEventSchema, type ProcessingHistoryEvent } from "./processing-history-event.js";

export type Identity = {
  /** Information about processing history for the datasource */
  processingHistory?: ProcessingHistoryEvent[];
  users?: DebugDatasourceStatusIdentityResponseComponent;
  groups?: DebugDatasourceStatusIdentityResponseComponent;
  memberships?: DebugDatasourceStatusIdentityResponseComponent;
};

export const identitySchema: Schema<Identity> = s.object<Identity>({
  processingHistory: s.optional(s.array(s.lazy(() => processingHistoryEventSchema))),
  users: s.optional(s.lazy(() => debugDatasourceStatusIdentityResponseComponentSchema)),
  groups: s.optional(s.lazy(() => debugDatasourceStatusIdentityResponseComponentSchema)),
  memberships: s.optional(s.lazy(() => debugDatasourceStatusIdentityResponseComponentSchema)),
});
