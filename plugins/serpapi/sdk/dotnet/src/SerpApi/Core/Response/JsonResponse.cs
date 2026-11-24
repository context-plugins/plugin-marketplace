using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using SerpApi.Core.Exceptions;
using SerpApi.Core.Extensions;
using SerpApi.Core.Models;

namespace SerpApi.Core.Response;

internal sealed class JsonResponse<TResponse> : IResponse<TResponse>
{
    private readonly JsonSerializerOptions _options;

    public JsonResponse(JsonConverter? jsonConverter) => _options = jsonConverter.ToWebOptions();

    public async ValueTask<TResponse> Map(ResponseContext context, CancellationToken cancellationToken)
    {
        using (context.Response)
        {
#if NET6_0_OR_GREATER
            var responseStream = await context.Response.Content.ReadAsStreamAsync(cancellationToken).ConfigureAwait(false);
#else
            var responseStream = await context.Response.Content.ReadAsStreamAsync().ConfigureAwait(false);
#endif
            try
            {
                return (await JsonSerializer.DeserializeAsync<TResponse>(responseStream, _options, cancellationToken)
                    .ConfigureAwait(false))!;
            }
            catch (JsonException ex)
            {
                throw ResponseDeserializationException.For(context, typeof(TResponse),
                    $"{context.Call} returned a body that could not be deserialized into {typeof(TResponse).Name}.", ex);
            }
        }
    }
}

internal static class JsonResponse
{
    public static JsonResponse<TResponse> Create<TResponse>(JsonConverter? converter = null) => new(converter);
}
