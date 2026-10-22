import type { ApiRequest, RawClientOptions, ServerBase, UrlTemplate } from "./api-request.js";
import type { StyledParam, Param, ParamPair } from "./param-value.js";
import { encodedParam, flattenValue } from "./param-value.js";
import { percentEncode, queryString, serializePairs } from "./params.js";
import { EncodeError } from "./errors.js";
import { SchemaError } from "./validation/schema-error.js";

type UrlDefaults = Pick<RawClientOptions, "defaultPathParams" | "defaultQuery">;

type UrlRequest = Pick<ApiRequest, "method" | "urlTemplate" | "pathParams" | "query">;

export class UrlBuilder {
  readonly #defaultPathParams: readonly Param[];
  readonly #defaultQuery: readonly StyledParam[];

  constructor(defaults: UrlDefaults) {
    this.#defaultPathParams = defaults.defaultPathParams;
    this.#defaultQuery = defaults.defaultQuery;
  }

  build(request: UrlRequest): RequestUrl {
    return new RequestUrl(this.#applyQuery(this.#resolvePath(request), request));
  }

  #resolvePath({ method, urlTemplate, pathParams }: UrlRequest): URL {
    try {
      return new URL(
        joinUrl(urlTemplate.baseUrl, expandPath(urlTemplate.subPath, pathParams, this.#defaultPathParams)),
      );
    } catch (err) {
      if (!(err instanceof SchemaError)) throw err;
      const uri = templateUri(urlTemplate);
      throw new EncodeError(`${method} ${uri} failed: Request path parameter could not be encoded.`, {
        cause: err,
        method,
        uri,
      });
    }
  }

  #applyQuery(path: URL, { method, query }: UrlRequest): URL {
    try {
      return buildQueryUrl(path, [this.#defaultQuery, query]);
    } catch (err) {
      if (!(err instanceof SchemaError)) throw err;
      const uri = uriOf(path);
      throw new EncodeError(`${method} ${uri} failed: Request query parameter could not be encoded.`, {
        cause: err,
        method,
        uri,
      });
    }
  }
}

export class RequestUrl {
  readonly uri: string;
  readonly #url: URL;

  constructor(url: URL) {
    this.#url = url;
    this.uri = uriOf(url);
  }

  withQuery(pairs: readonly ParamPair[]): URL {
    return copyWithQuery(this.#url, serializePairs(pairs, percentEncode));
  }
}

export function buildQueryUrl(url: URL, queryInWireOrder: ReadonlyArray<readonly StyledParam[]>): URL {
  return copyWithQuery(url, queryString(queryInWireOrder));
}

export function resolveBaseUrl(server: ServerBase): string {
  let out = server.baseUrl;
  for (const [key, value] of Object.entries(server.variables ?? {})) {
    if (value === undefined) continue;
    out = out.replaceAll(`{${key}}`, percentEncode(value));
  }
  return out;
}

export function templateUri(template: UrlTemplate): string {
  return joinUrl(template.baseUrl, template.subPath);
}

function uriOf(url: URL): string {
  return `${url.origin}${url.pathname}`;
}

function copyWithQuery(url: URL, added: string): URL {
  const result = new URL(url);
  if (added !== "") result.search = url.search === "" ? added : `${url.search.slice(1)}&${added}`;
  return result;
}

function expandPath(template: string, ...layers: ReadonlyArray<readonly Param[]>): string {
  let out = template;
  const skipped: string[] = [];
  for (const layer of layers) {
    for (const source of layer) {
      const value = encodedParam(source);
      if (value === undefined) {
        skipped.push(source.name);
        continue;
      }
      const replacement = value === null ? "" : flattenValue(value).map(percentEncode).join(",");
      out = out.replaceAll(`{${source.name}}`, replacement);
    }
  }
  for (const name of skipped) {
    if (!out.includes(`{${name}}`)) continue;
    throw new TypeError(`Path parameter "${name}" resolved to undefined and left {${name}} unfilled.`);
  }
  return out;
}

function joinUrl(base: string, path: string): string {
  const left = base.replace(/\/+$/, "");
  const right = path.replace(/^\/+/, "");
  return `${left}/${right}`;
}
