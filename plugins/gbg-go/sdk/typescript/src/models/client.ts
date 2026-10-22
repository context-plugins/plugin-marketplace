import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Client = {
  id: string;
  ip: string;
  address: string;
};

export const clientSchema: Schema<Client> = s.object<Client>({
  id: s.string(),
  ip: s.string(),
  address: s.string(),
});
