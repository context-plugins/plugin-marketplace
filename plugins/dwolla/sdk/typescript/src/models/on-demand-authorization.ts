import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links9Schema, type Links9 } from "./links9.js";

export type OnDemandAuthorization = {
  links?: Links9;
  bodyText?: string;
  buttonText?: string;
};

export const onDemandAuthorizationSchema: Schema<OnDemandAuthorization> = s.object<OnDemandAuthorization>({
  links: s.optional(s.lazy(() => links9Schema)),
  bodyText: s.optional(s.string()),
  buttonText: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
