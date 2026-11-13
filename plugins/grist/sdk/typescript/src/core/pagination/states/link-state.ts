import type { HttpMethod, UrlTemplate } from "../../api-request.js";
import type { StyledParam } from "../../param-value.js";
import { PaginationError } from "../../errors.js";

export type LinkState<TPage> = {
  readonly url: UrlTemplate;
  readonly query: readonly StyledParam[];
  readonly link: string | undefined;
  readonly next: (page: TPage, headers: Headers, itemCount: number, uri: string) => LinkState<TPage> | null;
};

export type LinkStateConfig<TPage> = {
  readonly method: HttpMethod;
  readonly url: UrlTemplate;
  readonly query: readonly StyledParam[];
  readonly link?: string;
  readonly nextLink: (page: TPage, headers: Headers) => string | null | undefined;
};

export function linkState<TPage>(config: LinkStateConfig<TPage>): LinkState<TPage> {
  return {
    url: config.url,
    query: config.query,
    link: config.link,
    next(response, headers, _, uri) {
      const nextLink = config.nextLink(response, headers)?.trim();
      if (!nextLink) return null;
      if (nextLink === config.link) return null;
      return linkState({
        ...config,
        url: resolveNextLink(nextLink, uri, config.method),
        query: [],
        link: nextLink,
      });
    },
  };
}

function resolveNextLink(nextLink: string, uri: string, method: HttpMethod): UrlTemplate {
  const base = new URL(uri);
  let resolved: URL;
  try {
    resolved = new URL(nextLink, base);
  } catch (err) {
    throw new PaginationError(`${method} ${uri} failed: the pagination link is not a URL.`, {
      method,
      uri,
      cause: err,
    });
  }
  if (resolved.protocol !== base.protocol || resolved.host !== base.host) {
    const uri = `${originOf(resolved)}${resolved.pathname}`;
    throw new PaginationError(
      `${method} ${uri} failed: the pagination link's origin ${originOf(resolved)} is not the API's ${originOf(base)}.`,
      { method, uri },
    );
  }
  return { baseUrl: originOf(resolved), subPath: `${resolved.pathname}${resolved.search}` };
}

function originOf(url: URL): string {
  return `${url.protocol}//${url.host}`;
}
