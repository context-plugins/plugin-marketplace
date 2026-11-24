import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateDataSecurityConfigSchema,
  type UpdateDataSecurityConfig,
} from "./update-data-security-config.js";

export type UpdateFlywheelRequest = {
  /** The Amazon Resource Number (ARN) of the flywheel to update. */
  flywheelArn: string;
  /** The Amazon Resource Number (ARN) of the active model version. */
  activeModelArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to
   * access the flywheel data.
   */
  dataAccessRoleArn?: string;
  dataSecurityConfig?: UpdateDataSecurityConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateFlywheelRequestSchema: Schema<UpdateFlywheelRequest> = s.object<UpdateFlywheelRequest>(
  {
    flywheelArn: s.string(),
    activeModelArn: s.optional(s.string()),
    dataAccessRoleArn: s.optional(s.string()),
    dataSecurityConfig: s.optional(s.lazy(() => updateDataSecurityConfigSchema)),
    _keysMap: {
      flywheelArn: "FlywheelArn",
      activeModelArn: "ActiveModelArn",
      dataAccessRoleArn: "DataAccessRoleArn",
      dataSecurityConfig: "DataSecurityConfig",
    },
  },
  { additionalProperties: s.json() },
);
