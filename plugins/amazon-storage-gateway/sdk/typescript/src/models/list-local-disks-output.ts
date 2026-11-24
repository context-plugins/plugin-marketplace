import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { diskSchema, type Disk } from "./disk.js";

export type ListLocalDisksOutput = {
  gatewayArn?: string;
  /** A JSON object containing the following fields: ListLocalDisksOutput$Disks */
  disks?: Disk[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listLocalDisksOutputSchema: Schema<ListLocalDisksOutput> = s.object<ListLocalDisksOutput>(
  {
    gatewayArn: s.optional(s.string()),
    disks: s.optional(s.array(s.lazy(() => diskSchema))),
    _keysMap: {
      gatewayArn: "GatewayARN",
      disks: "Disks",
    },
  },
  { additionalProperties: s.json() },
);
