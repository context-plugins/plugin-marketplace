import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayNameSchema, type DisplayName } from "./unions/display-name.js";
import { erc8004IdSchema, type Erc8004Id } from "./unions/erc8004-id.js";

export type Datum = {
  id: string;
  displayName: DisplayName;
  erc8004Id: Erc8004Id;
  createdAt: string;
};

export const datumSchema: Schema<Datum> = s.object<Datum>({
  id: s.string(),
  displayName: displayNameSchema,
  erc8004Id: erc8004IdSchema,
  createdAt: s.string(),
  _keysMap: {
    displayName: "display_name",
    erc8004Id: "erc8004_id",
    createdAt: "created_at",
  },
});
