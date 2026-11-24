using System;
using System.Collections.Generic;
using System.Linq;
using Bitbucket.Core.Models;

namespace Bitbucket.Core;

internal sealed class HeadersFactory
{
    private readonly IReadOnlyCollection<HeaderParam> _defaultHeaders;

    public HeadersFactory(IReadOnlyCollection<HeaderParam> defaultHeaders) =>
        _defaultHeaders = defaultHeaders;

    public IReadOnlyCollection<HeaderParam> Create(
        IReadOnlyCollection<HeaderParam> headerParameters,
        IReadOnlyCollection<HeaderParam> requestHeaders)
    {
        IReadOnlyCollection<HeaderParam> allHeaders = [.. _defaultHeaders, .. headerParameters, .. requestHeaders];
        return allHeaders.MergeLastWins();
    }
}

file static class HeaderParamCollectionExtensions
{
    extension(IReadOnlyCollection<HeaderParam> headers)
    {
        public IReadOnlyCollection<HeaderParam> MergeLastWins() =>
        [.. headers
            .GroupBy(header => header.Key, StringComparer.OrdinalIgnoreCase)
            .Select(duplicates => duplicates.Last())];
    }
}
