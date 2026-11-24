import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocSlim = {
  /** The public id of the Doc */
  id: string;
  /** The Docs Title */
  title: string | null;
  /** The Shortcut application url for the Doc. */
  appUrl: string;
};

export const docSlimSchema: Schema<DocSlim> = s.object<DocSlim>({
  id: s.string(),
  title: s.nullable(s.string()),
  appUrl: s.string(),
  _keysMap: {
    appUrl: "app_url",
  },
});
