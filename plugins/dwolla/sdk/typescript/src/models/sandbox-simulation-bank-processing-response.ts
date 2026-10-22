import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links16Schema, type Links16 } from "./links16.js";

/** Response when simulating bank transfer processing (200 OK). */
export type SandboxSimulationBankProcessingResponse = {
  /** Count of bank transfers (and related items) affected by the simulation run. */
  total: number;
  links: Links16;
};

export const sandboxSimulationBankProcessingResponseSchema: Schema<SandboxSimulationBankProcessingResponse> =
  s.object<SandboxSimulationBankProcessingResponse>({
    total: s.int(),
    links: links16Schema,
    _keysMap: {
      links: "_links",
    },
  });
