import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelOrExitOrderErrorData = {
  /**
   * Unique code for the error state
   *
   * @deprecated
   */
  errorCode?: string;
  /** Verbose message for the error state */
  message?: string;
  /**
   * Path to property failing validation
   *
   * @deprecated
   */
  propertyPath?: string;
  /**
   * Invalid value for the property failing validation
   *
   * @deprecated
   */
  invalidValue?: Record<string, unknown>;
  errorCode2?: string;
  propertyPath2?: string;
  invalidValue2?: Record<string, unknown>;
  /** Key of instrument */
  instrumentKey?: string;
  /** Reference order ID */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrExitOrderErrorDataSchema: Schema<CancelOrExitOrderErrorData> =
  s.object<CancelOrExitOrderErrorData>(
    {
      errorCode: s.optional(s.string()),
      message: s.optional(s.string()),
      propertyPath: s.optional(s.string()),
      invalidValue: s.optional(s.record(s.string(), s.unknown())),
      errorCode2: s.optional(s.string()),
      propertyPath2: s.optional(s.string()),
      invalidValue2: s.optional(s.record(s.string(), s.unknown())),
      instrumentKey: s.optional(s.string()),
      orderId: s.optional(s.string()),
      _keysMap: {
        errorCode2: "error_code",
        propertyPath2: "property_path",
        invalidValue2: "invalid_value",
        instrumentKey: "instrument_key",
        orderId: "order_id",
      },
    },
    { additionalProperties: s.json() },
  );
