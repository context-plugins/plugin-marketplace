using System;
using System.Collections.Generic;
using System.Net.Http.Headers;
using AmazonLex.Core.Models;

namespace AmazonLex.Core.Pagination.States;

internal sealed record LinkState<TResponse> : IPageState<TResponse, LinkState<TResponse>>
{
    private readonly Func<TResponse, HttpResponseHeaders, string?> _nextLink;

    internal LinkState(Func<TResponse, HttpResponseHeaders, string?> nextLink) => _nextLink = nextLink;

    public required UrlTemplate Url { get; init; }

    public required IReadOnlyCollection<Param> Query { get; init; }

    public required string? Link { get; init; }

    public LinkState<TResponse>? Next(TResponse page, HttpResponseHeaders headers, int itemCount)
    {
        var nextLink = _nextLink(page, headers);

        if (nextLink is not { Length: > 0 })
            return null;

        if (nextLink == Link)
            return null;

        var nextUrl = Url.ResolveNextLink(nextLink);
        return this with { Url = nextUrl, Query = [], Link = nextLink };
    }
}

internal static class LinkState
{
    internal static LinkState<TResponse> Create<TResponse>(
        UrlTemplate url,
        IReadOnlyCollection<Param> query,
        Func<TResponse, HttpResponseHeaders, string?> nextLink) =>
        new(nextLink) { Url = url, Query = query, Link = null };
}

file static class LinkPaginationExtensions
{
    extension(UrlTemplate baseUrlTemplate)
    {
        public UrlTemplate ResolveNextLink(string nextLink)
        {
            var baseUri = BuildBaseUri(baseUrlTemplate);
            if (!Uri.TryCreate(baseUri, nextLink, out var resolvedUri))
                throw new InvalidOperationException($"Invalid pagination link: '{nextLink}'.");

            if (!(string.Equals(resolvedUri.Scheme, baseUri.Scheme, StringComparison.OrdinalIgnoreCase) &&
                  string.Equals(resolvedUri.Host, baseUri.Host, StringComparison.OrdinalIgnoreCase) &&
                  resolvedUri.Port == baseUri.Port))
            {
                throw new InvalidOperationException($"Cross-origin pagination link " +
                    $"'{resolvedUri.GetLeftPart(UriPartial.Authority)}' does not match API base " +
                    $"'{baseUri.GetLeftPart(UriPartial.Authority)}'."
                );
            }

            return new UrlTemplate(resolvedUri.GetLeftPart(UriPartial.Authority), resolvedUri.PathAndQuery, []);
        }
    }

    private static Uri BuildBaseUri(UrlTemplate template)
    {
        var url = $"{template.BaseUrl.TrimEnd('/')}/{template.Path.TrimStart('/')}";
        foreach (var (key, value) in template.Variables)
            url = url.Replace($"{{{key}}}", value?.ToString() ?? string.Empty);

        return new Uri(url, UriKind.Absolute);
    }
}
