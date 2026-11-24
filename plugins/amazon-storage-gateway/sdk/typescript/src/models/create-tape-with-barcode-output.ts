import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateTapeWithBarcodeOutput = {
  /** A unique Amazon Resource Name (ARN) that represents the virtual tape that was created. */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTapeWithBarcodeOutputSchema: Schema<CreateTapeWithBarcodeOutput> =
  s.object<CreateTapeWithBarcodeOutput>(
    {
      tapeArn: s.optional(s.string()),
      _keysMap: {
        tapeArn: "TapeARN",
      },
    },
    { additionalProperties: s.json() },
  );
