using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using GoogleSearchConsole.Core.Models;

namespace GoogleSearchConsole.Core.ErrorResponse;

public sealed class RawError
{
    private readonly byte[] _content;

    public HttpStatusCode StatusCode { get; }

    private RawError(HttpStatusCode statusCode, byte[] content)
    {
        StatusCode = statusCode;
        _content = content;
    }

    internal static async Task<RawError> Create(HttpResponseMessage response,
        CancellationToken cancellationToken)
    {
#if NET6_0_OR_GREATER
        var content = await response.Content.ReadAsByteArrayAsync(cancellationToken).ConfigureAwait(false);
#else
        var content = await response.Content.ReadAsByteArrayAsync().ConfigureAwait(false);
#endif
        return new RawError(response.StatusCode, content);
    }

    public ReadOnlyMemory<byte> ReadAsBytes() => _content;

    public string ReadAsString() => Encoding.UTF8.GetString(_content);

    public T? ReadAsJson<T>() => JsonSerializer.Deserialize<T>(_content);
}

internal sealed class RawErrorResponse : IErrorResponse<RawError>
{
    public static RawErrorResponse Instance { get; } = new();

    private RawErrorResponse() { }

    public Task<RawError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        RawError.Create(context.Response, cancellationToken);
}
