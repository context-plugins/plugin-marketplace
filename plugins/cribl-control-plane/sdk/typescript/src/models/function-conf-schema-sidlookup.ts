import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookupField1Schema, type LookupField1 } from "./lookup-field1.js";

export type FunctionConfSchemaSidlookup = {
  /** Set of expressions matched to lookup responses */
  fields?: LookupField1[];
};

export const functionConfSchemaSidlookupSchema: Schema<FunctionConfSchemaSidlookup> =
  s.object<FunctionConfSchemaSidlookup>({
    fields: s.optional(s.array(s.lazy(() => lookupField1Schema))),
  });
