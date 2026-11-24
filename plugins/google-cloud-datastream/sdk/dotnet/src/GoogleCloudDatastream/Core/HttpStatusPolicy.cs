using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace GoogleCloudDatastream.Core;

internal sealed class HttpStatusPolicy
{
    private readonly IReadOnlyCollection<HttpStatusCode> _successCodes;

    public HttpStatusPolicy(IReadOnlyCollection<HttpStatusCode> successCodes) => _successCodes = successCodes;

    /// <summary>
    /// Returns <c>true</c> when the status code indicates a successful operation per the SDK
    /// definition (the spec-derived allowlist when one is configured; otherwise the 200–299
    /// default that matches <see cref="System.Net.Http.HttpResponseMessage.IsSuccessStatusCode"/>).
    /// </summary>
    /// <remarks>
    /// The default allowlist (empty) only treats 2xx as success. <c>304 Not Modified</c> is
    /// <b>not</b> success under the default; operations that legitimately treat 304 as a
    /// successful cache hit must enumerate it explicitly in their success allowlist.
    /// </remarks>
    public bool IsSuccess(HttpStatusCode statusCode) =>
        _successCodes.Count > 0
            ? _successCodes.Contains(statusCode)
            : (int)statusCode is >= 200 and <= 299;

    public bool IsUnauthorized(HttpStatusCode statusCode) => statusCode == HttpStatusCode.Unauthorized;
}
