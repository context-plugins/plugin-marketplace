import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookupField1Schema, type LookupField1 } from "./lookup-field1.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaSidlookup1 = {
  /** Set of expressions matched to lookup responses */
  fields?: LookupField1[];
};

export const functionConfSchemaSidlookup1Schema: Schema<FunctionConfSchemaSidlookup1> =
  s.object<FunctionConfSchemaSidlookup1>({
    fields: s.optional(s.array(s.lazy(() => lookupField1Schema))),
  });
