import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Source, sourceSchema } from "./source.js";
import { domainNameSchema, type DomainName } from "./unions/domain-name.js";

export type PazeSessionRequest = {
  /**
   * The platform that the Paze session is being created for. Defaults to `web`.
   *
   * @default Source.Web
   */
  source?: Source;
  /** The domain on which Paze is being loaded. Required when `source` is `web`. */
  domainName?: DomainName;
};

export const pazeSessionRequestSchema: Schema<PazeSessionRequest> = s.object<PazeSessionRequest>({
  source: s.defaulted(sourceSchema, Source.Web),
  domainName: s.optional(s.lazy(() => domainNameSchema)),
  _keysMap: {
    domainName: "domain_name",
  },
});
