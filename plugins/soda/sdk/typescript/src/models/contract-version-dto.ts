import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContractVersionDto = {
  checksum?: string;
  contents?: string;
  contractId?: string;
  created?: Date;
  creatorId?: string;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contractVersionDtoSchema: Schema<ContractVersionDto> = s.object<ContractVersionDto>(
  {
    checksum: s.optional(s.string()),
    contents: s.optional(s.string()),
    contractId: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    creatorId: s.optional(s.string()),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
