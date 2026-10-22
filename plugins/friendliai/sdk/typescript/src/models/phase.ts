import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Phase = {
  RequestingVirtualMachine: "REQUESTING_VIRTUAL_MACHINE",
  DownloadingModel: "DOWNLOADING_MODEL",
  EngineInitializing: "ENGINE_INITIALIZING",
} as const;
export type Phase = (typeof Phase)[keyof typeof Phase] | (string & {});

export const phaseSchema: EnumSchema<Phase> = s.enumOf<Phase>(Phase);
