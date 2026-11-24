import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeUiPathOrchestratorMachinesApiSchema,
  type TypeUiPathOrchestratorMachinesApi,
} from "./type-ui-path-orchestrator-machines-api.js";

export type ValueUiPathOrchestratorMachinesApi = {
  /** Unique machine identifier */
  id?: number;
  /** Display name or hostname of the machine */
  name?: string;
  /** Whether this is a physical machine or a cloud robot template */
  type?: TypeUiPathOrchestratorMachinesApi;
  /** License key used by the robot installed on this machine */
  licenseKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorMachinesApiSchema: Schema<ValueUiPathOrchestratorMachinesApi> =
  s.object<ValueUiPathOrchestratorMachinesApi>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      type: s.optional(s.lazy(() => typeUiPathOrchestratorMachinesApiSchema)),
      licenseKey: s.optional(s.string()),
      _keysMap: {
        id: "Id",
        name: "Name",
        type: "Type",
        licenseKey: "LicenseKey",
      },
    },
    { additionalProperties: s.json() },
  );
