import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restrictionSchema, type Restriction } from "./restriction.js";

/**
 * Microsoft Purview's answer on the text, from the SDKs' purviewCheck: the strictest restriction
 * its DLP policies returned (block, warn, audit or none). The text itself went to Microsoft, never
 * here
 */
export type Purview = {
  restriction: Restriction | null;
  actions: number;
  scopeModified: boolean;
  unavailable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purviewProperties: s.Shape<Purview> = {
  restriction: s.nullable(s.lazy(() => restrictionSchema)),
  actions: s.int(),
  scopeModified: s.boolean(),
  unavailable: s.boolean(),
};

export const purviewInternalSchema: Schema<Purview> = s.object<Purview>(purviewProperties, {
  additionalProperties: s.json(),
});

export const purviewSchema: Schema<Purview> = s.lazySchema(() =>
  s.object<Purview>(
    {
      ...purviewProperties,
      actions: s.int().check(s.gte(0), s.lte(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
