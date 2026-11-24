import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1CommonelementsComProfessionalsAndLicensesApi = {
  /** Association organization id. */
  id?: string;
  /** Association legal name. */
  name?: string;
  /** "hoa", "condo", or "coop". */
  subtype?: string | null;
  /** Association location. */
  city?: string | null;
  /** Association location. */
  state?: string | null;
  /** Slug for the public directory page. */
  directorySlug?: string | null;
  /**
   * How this row was resolved: "relationship:<type>" for a confirmed graph edge (managed_by,
   * under_contract, represented_by), or "manager_view:<source>" for a name match against the public
   * management registry.
   */
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1CommonelementsComProfessionalsAndLicensesApiSchema: Schema<Data1CommonelementsComProfessionalsAndLicensesApi> =
  s.object<Data1CommonelementsComProfessionalsAndLicensesApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      subtype: s.optionalNullable(s.string()),
      city: s.optionalNullable(s.string()),
      state: s.optionalNullable(s.string()),
      directorySlug: s.optionalNullable(s.string()),
      source: s.optional(s.string()),
      _keysMap: {
        directorySlug: "directory_slug",
      },
    },
    { additionalProperties: s.json() },
  );
