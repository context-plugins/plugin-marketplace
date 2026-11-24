import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopBgpFailoverTestRequest = {
  /** The ID of the virtual interface you no longer want to test. */
  virtualInterfaceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBgpFailoverTestRequestSchema: Schema<StopBgpFailoverTestRequest> =
  s.object<StopBgpFailoverTestRequest>(
    {
      virtualInterfaceId: s.string(),
    },
    { additionalProperties: s.json() },
  );
