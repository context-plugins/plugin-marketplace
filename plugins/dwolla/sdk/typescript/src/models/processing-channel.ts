import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination3Schema, type Destination3 } from "./destination3.js";

export type ProcessingChannel = {
  /** The payment network used to process the transfer */
  destination?: Destination3;
};

export const processingChannelSchema: Schema<ProcessingChannel> = s.object<ProcessingChannel>({
  destination: s.optional(s.lazy(() => destination3Schema)),
});
