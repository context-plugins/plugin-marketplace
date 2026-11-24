using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Extensions;
using ApiVerve.Core.Models;

namespace ApiVerve.Core.Response;

internal sealed class JsonSseResponse<TResponse> : IResponse<IAsyncEnumerable<TResponse>>
{
    private readonly JsonSerializerOptions _options;
    private readonly byte[]? _sentinelBytes;

    public JsonSseResponse(string? sentinel, JsonConverter? jsonConverter)
    {
        _sentinelBytes = sentinel is null ? null : Encoding.UTF8.GetBytes(sentinel);
        _options = jsonConverter.ToWebOptions();
    }

    public ValueTask<IAsyncEnumerable<TResponse>> Map(
        ResponseContext context,
        CancellationToken cancellationToken)
    {
        return new ValueTask<IAsyncEnumerable<TResponse>>(Enumerate(cancellationToken));

        async IAsyncEnumerable<TResponse> Enumerate([EnumeratorCancellation] CancellationToken ct)
        {
            await foreach (var data in SseFrameReader
                               .EnumerateFrames(context, _sentinelBytes, ct)
                               .ConfigureAwait(false))
            {
                TResponse value;
                try
                {
                    value = JsonSerializer.Deserialize<TResponse>(data, _options)!;
                }
                catch (JsonException ex)
                {
                    throw ResponseDeserializationException.For(context, typeof(TResponse),
                        $"{context.Call} received a Server-Sent Events frame that could not be deserialized into {typeof(TResponse).Name}.", ex);
                }

                yield return value;
            }
        }
    }
}

internal static class JsonSseResponse
{
    public static JsonSseResponse<TResponse> Create<TResponse>(JsonConverter? converter = null) =>
        new(null, converter);

    public static JsonSseResponse<TResponse> Create<TResponse>(string sentinel, JsonConverter? converter = null) =>
        new(sentinel, converter);
}
