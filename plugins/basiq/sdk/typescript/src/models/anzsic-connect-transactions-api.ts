import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  class1ConnectTransactionsApiSchema,
  type Class1ConnectTransactionsApi,
} from "./class1-connect-transactions-api.js";
import {
  divisionReportingReportsApiSchema,
  type DivisionReportingReportsApi,
} from "./division-reporting-reports-api.js";
import {
  groupConnectTransactionsApiSchema,
  type GroupConnectTransactionsApi,
} from "./group-connect-transactions-api.js";
import { subclass1Schema, type Subclass1 } from "./subclass1.js";
import {
  subdivisionReportingReportsApiSchema,
  type SubdivisionReportingReportsApi,
} from "./subdivision-reporting-reports-api.js";

export type AnzsicConnectTransactionsApi = {
  division?: DivisionReportingReportsApi;
  subdivision?: SubdivisionReportingReportsApi;
  group?: GroupConnectTransactionsApi;
  class?: Class1ConnectTransactionsApi;
  subclass?: Subclass1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anzsicConnectTransactionsApiSchema: Schema<AnzsicConnectTransactionsApi> =
  s.object<AnzsicConnectTransactionsApi>(
    {
      division: s.optional(s.lazy(() => divisionReportingReportsApiSchema)),
      subdivision: s.optional(s.lazy(() => subdivisionReportingReportsApiSchema)),
      group: s.optional(s.lazy(() => groupConnectTransactionsApiSchema)),
      class: s.optional(s.lazy(() => class1ConnectTransactionsApiSchema)),
      subclass: s.optional(s.lazy(() => subclass1Schema)),
    },
    { additionalProperties: s.json() },
  );
