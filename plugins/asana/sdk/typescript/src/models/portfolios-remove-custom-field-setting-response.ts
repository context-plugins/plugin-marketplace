import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PortfoliosRemoveCustomFieldSettingResponse = {
  /**
   * An empty object. Some endpoints do not return an object on success. The success is conveyed
   * through a 2-- status code and returning an empty object.
   */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosRemoveCustomFieldSettingResponseSchema: Schema<PortfoliosRemoveCustomFieldSettingResponse> =
  s.object<PortfoliosRemoveCustomFieldSettingResponse>(
    {
      data: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
