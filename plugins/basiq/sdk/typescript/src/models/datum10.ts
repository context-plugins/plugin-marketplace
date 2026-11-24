import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classConnectionsApiSchema, type ClassConnectionsApi } from "./class-connections-api.js";
import { linksConnectionsApiSchema, type LinksConnectionsApi } from "./links-connections-api.js";
import { status1Schema, type Status1 } from "./status1.js";

export type Datum10 = {
  /** Type always "account". */
  type: string;
  /** Account identification. */
  id: string;
  /** Account name. */
  name: string;
  /** Currency */
  currency: string;
  class: ClassConnectionsApi;
  /** Account number */
  accountNo: string;
  /** Account available funds, nullable. */
  availableFunds: string | null;
  /** Account balance, nullable. */
  balance: string | null;
  /** Account last updated date and time. */
  lastUpdated: string;
  /** Account status. */
  status: Status1;
  links: LinksConnectionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum10Schema: Schema<Datum10> = s.object<Datum10>(
  {
    type: s.string(),
    id: s.string(),
    name: s.string(),
    currency: s.string(),
    class: classConnectionsApiSchema,
    accountNo: s.string(),
    availableFunds: s.nullable(s.string()),
    balance: s.nullable(s.string()),
    lastUpdated: s.string(),
    status: status1Schema,
    links: linksConnectionsApiSchema,
  },
  { additionalProperties: s.json() },
);
