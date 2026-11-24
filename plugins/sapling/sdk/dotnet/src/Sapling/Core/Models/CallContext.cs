using System;
using System.Net.Http;

namespace Sapling.Core.Models;

internal readonly record struct CallContext(HttpMethod Method, Uri RequestUri)
{
    public static CallContext For(HttpMethod method, Uri requestUri) =>
        new(method, new Uri(requestUri.GetLeftPart(UriPartial.Path)));

    public static CallContext For(HttpRequestMessage request) => For(request.Method, request.RequestUri);

    public override string ToString() => $"{Method.Method} {RequestUri.AbsoluteUri}";
}
