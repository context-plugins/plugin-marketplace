using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Serialization;
using CallNode.Core.Extensions;

namespace CallNode.Core.Request;

internal sealed class JsonRequest<TData>(TData data, JsonSerializerOptions options) : IRequest
{
    public HttpContent Get() => JsonContent.Create(data, options: options);
    public bool CanRetry => true;
}

internal static class JsonRequest
{
    public static JsonRequest<TData> Create<TData>(TData data, JsonConverter? converter = null) =>
        new(data, converter.ToWebOptions());
}
