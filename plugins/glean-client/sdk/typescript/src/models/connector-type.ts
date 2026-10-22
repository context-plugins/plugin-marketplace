import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The source from which document content was pulled, e.g. an API crawl or browser history */
export const ConnectorType = {
  ApiCrawl: "API_CRAWL",
  BrowserCrawl: "BROWSER_CRAWL",
  BrowserHistory: "BROWSER_HISTORY",
  Builtin: "BUILTIN",
  FederatedSearch: "FEDERATED_SEARCH",
  PushApi: "PUSH_API",
  WebCrawl: "WEB_CRAWL",
  NativeHistory: "NATIVE_HISTORY",
} as const;
export type ConnectorType = (typeof ConnectorType)[keyof typeof ConnectorType] | (string & {});

export const connectorTypeSchema: EnumSchema<ConnectorType> = s.enumOf<ConnectorType>(ConnectorType);
