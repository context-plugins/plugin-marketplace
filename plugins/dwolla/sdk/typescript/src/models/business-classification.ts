import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded5Schema, type Embedded5 } from "./embedded5.js";
import { links2Schema, type Links2 } from "./links2.js";

export type BusinessClassification = {
  links?: Links2;
  embedded?: Embedded5;
  id?: string;
  name?: string;
};

export const businessClassificationSchema: Schema<BusinessClassification> = s.object<BusinessClassification>({
  links: s.optional(s.lazy(() => links2Schema)),
  embedded: s.optional(s.lazy(() => embedded5Schema)),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  _keysMap: {
    links: "_links",
    embedded: "_embedded",
  },
});
