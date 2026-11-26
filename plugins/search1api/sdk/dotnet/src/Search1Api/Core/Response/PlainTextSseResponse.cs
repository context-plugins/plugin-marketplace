using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Search1Api.Core.Exceptions;
using Search1Api.Core.Models;

namespace Search1Api.Core.Response;

internal sealed class PlainTextSseResponse<TResponse> : IResponse<IAsyncEnumerable<TResponse>>
{
    private readonly Func<string, TResponse> _map;
    private readonly byte[]? _sentinelBytes;

    public PlainTextSseResponse(Func<string, TResponse> map, string? sentinel)
    {
        _map = map;
        _sentinelBytes = sentinel is null ? null : Encoding.UTF8.GetBytes(sentinel);
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
                    value = _map(Encoding.UTF8.GetString(data));
                }
                catch (OperationCanceledException) when (ct.IsCancellationRequested)
                {
                    throw;
                }
                catch (Exception ex)
                {
                    throw ResponseDeserializationException.For(context, typeof(TResponse),
                        $"{context.Call} received a Server-Sent Events frame that could not be parsed as {typeof(TResponse).Name}.", ex);
                }

                yield return value;
            }
        }
    }
}

internal static class PlainTextSseResponse
{
    public static PlainTextSseResponse<TResponse> Create<TResponse>(Func<string, TResponse> map) =>
        new(map, null);

    public static PlainTextSseResponse<TResponse> Create<TResponse>(Func<string, TResponse> map, string sentinel) =>
        new(map, sentinel);

    public static PlainTextSseResponse<TResponse?> CreateNullable<TResponse>(Func<string, TResponse> map)
        where TResponse : struct =>
        new(body => string.IsNullOrWhiteSpace(body) ? null : map(body), null);

    public static PlainTextSseResponse<TResponse?> CreateNullable<TResponse>(Func<string, TResponse> map, string sentinel)
        where TResponse : struct =>
        new(body => string.IsNullOrWhiteSpace(body) ? null : map(body), sentinel);

    public static PlainTextSseResponse<string> CreateString() =>
        new(static s => s, null);

    public static PlainTextSseResponse<string> CreateString(string sentinel) =>
        new(static s => s, sentinel);

    public static PlainTextSseResponse<string?> CreateNullableString() =>
        new(static body => string.IsNullOrWhiteSpace(body) ? null : body, null);

    public static PlainTextSseResponse<string?> CreateNullableString(string sentinel) =>
        new(static body => string.IsNullOrWhiteSpace(body) ? null : body, sentinel);
}
