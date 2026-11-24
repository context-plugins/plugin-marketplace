using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ReadMe.Core.Webhooks;

public sealed class WebhookRequest
{
    private const int CopyBufferSize = 81920;

    private readonly Dictionary<string, string> _headers;

    public ReadOnlyMemory<byte> Body { get; }

    public bool TryGetHeader(string name, [NotNullWhen(true)] out string? value) =>
        _headers.TryGetValue(name, out value);

    private WebhookRequest(
        ReadOnlyMemory<byte> body,
        IEnumerable<KeyValuePair<string, IEnumerable<string>>> headers)
    {
        Body = body;
        _headers = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        foreach (var header in headers)
        {
            if (header.Key is null) continue;
            foreach (var value in header.Value)
            {
                _headers[header.Key] = _headers.TryGetValue(header.Key, out var existing)
                    ? $"{existing},{value}"
                    : value;
            }
        }
    }

    public static async Task<WebhookRequest> FromStream<THeaderValues>(
        Stream body,
        IEnumerable<KeyValuePair<string, THeaderValues>> headers,
        CancellationToken cancellationToken = default)
        where THeaderValues : IEnumerable<string?>
    {
        if (body is null) throw new ArgumentNullException(nameof(body));
        if (headers is null) throw new ArgumentNullException(nameof(headers));

        using var buffer = new MemoryStream();
        await body.CopyToAsync(buffer, CopyBufferSize, cancellationToken).ConfigureAwait(false);

        return new WebhookRequest(buffer.ToArray(), Normalize(headers));
    }

    public static WebhookRequest FromBytes<THeaderValues>(
        ReadOnlyMemory<byte> body,
        IEnumerable<KeyValuePair<string, THeaderValues>> headers)
        where THeaderValues : IEnumerable<string?>
    {
        if (headers is null) throw new ArgumentNullException(nameof(headers));

        return new WebhookRequest(body, Normalize(headers));
    }

    private static IEnumerable<KeyValuePair<string, IEnumerable<string>>> Normalize<THeaderValues>(
        IEnumerable<KeyValuePair<string, THeaderValues>> headers)
        where THeaderValues : IEnumerable<string?>
        => headers.Select(h => new KeyValuePair<string, IEnumerable<string>>(
            h.Key, h.Value?.OfType<string>() ?? []));
}
