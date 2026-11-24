import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListVolumeInitiatorsOutput = {
  /** The host names and port numbers of all iSCSI initiators that are connected to the gateway. */
  initiators?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVolumeInitiatorsOutputSchema: Schema<ListVolumeInitiatorsOutput> =
  s.object<ListVolumeInitiatorsOutput>(
    {
      initiators: s.optional(s.array(s.string())),
      _keysMap: {
        initiators: "Initiators",
      },
    },
    { additionalProperties: s.json() },
  );
