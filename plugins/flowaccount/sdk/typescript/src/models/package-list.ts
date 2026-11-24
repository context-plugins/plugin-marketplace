import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PackageList = {
  id?: number;
  packageName: string;
  description?: string | null;
  configuration: string;
  remarks?: string | null;
  displayNameTh?: string | null;
  displayNameEn?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const packageListProperties: s.Shape<PackageList> = {
  id: s.optional(s.int()),
  packageName: s.string(),
  description: s.optionalNullable(s.string()),
  configuration: s.string(),
  remarks: s.optionalNullable(s.string()),
  displayNameTh: s.optionalNullable(s.string()),
  displayNameEn: s.optionalNullable(s.string()),
  _keysMap: {
    displayNameTh: "displayNameTH",
    displayNameEn: "displayNameEN",
  },
};

export const packageListInternalSchema: Schema<PackageList> = s.object<PackageList>(packageListProperties, {
  additionalProperties: s.json(),
});

export const packageListSchema: Schema<PackageList> = s.lazySchema(() =>
  s.object<PackageList>(
    {
      ...packageListProperties,
      packageName: s.string().check(s.minLength(1)),
      configuration: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
