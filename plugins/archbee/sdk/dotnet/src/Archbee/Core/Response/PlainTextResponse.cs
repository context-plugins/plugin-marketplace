using System;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core.Exceptions;
using Archbee.Core.Models;

namespace Archbee.Core.Response;

internal sealed class PlainTextResponse<TResponse> : IResponse<TResponse>
{
    private readonly Func<string, TResponse> _map;

    internal PlainTextResponse(Func<string, TResponse> map) => _map = map;

    public async ValueTask<TResponse> Map(ResponseContext context, CancellationToken cancellationToken)
    {
        using (context.Response)
        {
#if NET6_0_OR_GREATER
            var responseString = await context.Response.Content.ReadAsStringAsync(cancellationToken).ConfigureAwait(false);
#else
            var responseString = await context.Response.Content.ReadAsStringAsync().ConfigureAwait(false);
#endif
            try
            {
                return _map(responseString);
            }
            catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw ResponseDeserializationException.For(context, typeof(TResponse),
                    $"{context.Call} returned a body that could not be parsed as {typeof(TResponse).Name}.", ex);
            }
        }
    }
}

internal static class PlainTextResponse
{
    internal static PlainTextResponse<TResponse> Create<TResponse>(Func<string, TResponse> map) =>
        new(map);

    internal static PlainTextResponse<TResponse?> CreateNullable<TResponse>(Func<string, TResponse> map)
        where TResponse : struct =>
        new(body => string.IsNullOrWhiteSpace(body) ? null : map(body));

    internal static PlainTextResponse<string> CreateString() =>
        new(static s => s);

    internal static PlainTextResponse<string?> CreateNullableString() =>
        new(static body => string.IsNullOrWhiteSpace(body) ? null : body);
}
