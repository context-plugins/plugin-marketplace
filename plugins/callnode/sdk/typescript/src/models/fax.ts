import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  chargeStatusCallnodeIoFaxesApiSchema,
  type ChargeStatusCallnodeIoFaxesApi,
} from "./charge-status-callnode-io-faxes-api.js";
import { directionSchema, type Direction } from "./direction.js";
import { resolution1Schema, type Resolution1 } from "./resolution1.js";
import {
  statusCallnodeIoFaxesApiSchema,
  type StatusCallnodeIoFaxesApi,
} from "./status-callnode-io-faxes-api.js";

export type Fax = {
  id?: string;
  direction?: Direction;
  status?: StatusCallnodeIoFaxesApi;
  /** Plus sign followed by 7–15 digits. */
  from?: string;
  /** Plus sign followed by 7–15 digits. */
  to?: string;
  /** Pages in the document (sent) or announced (received). */
  pages?: number | null;
  /** Pages actually transmitted; what is charged. */
  pagesTransferred?: number;
  resolution?: Resolution1;
  header?: string | null;
  /** The fax engine's result */
  resultText?: string | null;
  /** The far machine's station ID (TSI/CSI). */
  remoteStationId?: string | null;
  /** Whether T.38 was negotiated (null until the session ran). */
  t38?: boolean | null;
  ecm?: boolean | null;
  hasDocument?: boolean;
  /** Charged when the fax finished; null before. */
  costUsd?: number | null;
  chargeStatus?: ChargeStatusCallnodeIoFaxesApi | null;
  testMode?: boolean;
  metadata?: Record<string, unknown> | null;
  createdAt?: Date;
  startedAt?: Date | null;
  completedAt?: Date | null;
  /** On the send response only - every page at the rate. */
  estimatedCost?: number | null;
  /** On the send response only - true when an idempotency key replayed an earlier send. */
  replay?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const faxProperties: s.Shape<Fax> = {
  id: s.optional(s.string()),
  direction: s.optional(s.lazy(() => directionSchema)),
  status: s.optional(s.lazy(() => statusCallnodeIoFaxesApiSchema)),
  from: s.optional(s.string()),
  to: s.optional(s.string()),
  pages: s.optionalNullable(s.int()),
  pagesTransferred: s.optional(s.int()),
  resolution: s.optional(s.lazy(() => resolution1Schema)),
  header: s.optionalNullable(s.string()),
  resultText: s.optionalNullable(s.string()),
  remoteStationId: s.optionalNullable(s.string()),
  t38: s.optionalNullable(s.boolean()),
  ecm: s.optionalNullable(s.boolean()),
  hasDocument: s.optional(s.boolean()),
  costUsd: s.optionalNullable(s.float64()),
  chargeStatus: s.optionalNullable(s.lazy(() => chargeStatusCallnodeIoFaxesApiSchema)),
  testMode: s.optional(s.boolean()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  createdAt: s.optional(s.dateTime()),
  startedAt: s.optionalNullable(s.dateTime()),
  completedAt: s.optionalNullable(s.dateTime()),
  estimatedCost: s.optionalNullable(s.float64()),
  replay: s.optional(s.boolean()),
};

export const faxInternalSchema: Schema<Fax> = s.object<Fax>(faxProperties, {
  additionalProperties: s.json(),
});

export const faxSchema: Schema<Fax> = s.lazySchema(() =>
  s.object<Fax>(
    {
      ...faxProperties,
      from: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
      to: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
