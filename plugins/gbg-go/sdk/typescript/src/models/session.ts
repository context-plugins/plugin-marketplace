import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auth1Schema, type Auth1 } from "./auth1.js";
import { clientSchema, type Client } from "./client.js";
import { device1Schema, type Device1 } from "./device1.js";
import { spanSchema, type Span } from "./span.js";
import { traceSchema, type Trace } from "./trace.js";
import { transactionSchema, type Transaction } from "./transaction.js";
import { userSchema, type User } from "./user.js";

export type Session = {
  user?: User;
  client?: Client;
  device?: Device1;
  trace?: Trace;
  span?: Span;
  transaction?: Transaction;
  auth?: Auth1[];
};

export const sessionSchema: Schema<Session> = s.object<Session>({
  user: s.optional(s.lazy(() => userSchema)),
  client: s.optional(s.lazy(() => clientSchema)),
  device: s.optional(s.lazy(() => device1Schema)),
  trace: s.optional(s.lazy(() => traceSchema)),
  span: s.optional(s.lazy(() => spanSchema)),
  transaction: s.optional(s.lazy(() => transactionSchema)),
  auth: s.optional(s.array(s.lazy(() => auth1Schema))),
});
