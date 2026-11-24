import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customFieldResponseResourceSchema,
  type CustomFieldResponseResource,
} from "./custom-field-response-resource.js";

export type TicketResource = {
  id: string;
  idSuffix: string;
  transactionId: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  description: string;
  price: number;
  pdf: string;
  checkedInAt: string;
  customFields: CustomFieldResponseResource[];
  createdAt: string;
  updatedAt: string;
  retailPrice: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ticketResourceSchema: Schema<TicketResource> = s.object<TicketResource>(
  {
    id: s.string(),
    idSuffix: s.string(),
    transactionId: s.string(),
    name: s.string(),
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    phone: s.string(),
    title: s.string(),
    description: s.string(),
    price: s.float64(),
    pdf: s.string(),
    checkedInAt: s.string(),
    customFields: s.array(s.lazy(() => customFieldResponseResourceSchema)),
    createdAt: s.string(),
    updatedAt: s.string(),
    retailPrice: s.nullable(s.string()),
    _keysMap: {
      idSuffix: "id_suffix",
      transactionId: "transaction_id",
      firstName: "first_name",
      lastName: "last_name",
      checkedInAt: "checked_in_at",
      customFields: "custom_fields",
      createdAt: "created_at",
      updatedAt: "updated_at",
      retailPrice: "retail_price",
    },
  },
  { additionalProperties: s.json() },
);
