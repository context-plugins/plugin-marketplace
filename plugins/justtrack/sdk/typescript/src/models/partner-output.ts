import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PartnerOutput = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const partnerOutputProperties: s.Shape<PartnerOutput> = {
  id: s.int(),
  name: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
};

export const partnerOutputInternalSchema: Schema<PartnerOutput> = s.object<PartnerOutput>(
  partnerOutputProperties,
  { additionalProperties: s.json() },
);

export const partnerOutputSchema: Schema<PartnerOutput> = s.lazySchema(() =>
  s.object<PartnerOutput>(
    {
      ...partnerOutputProperties,
      id: s.int().check(s.gte(1)),
      name: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
