using System.Text.Json.Serialization;
using Postscript.Core.Models;

namespace Postscript.Models;

public record ApiV2WebhooksRequest1
{
    /// <summary>
    /// Destination URL for webhook deliveries (HTTPS only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_url")]
    public string? CallbackUrl { get; init; }

    /// <summary>
    /// Custom key:value pairs to be sent as headers in every callback.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public object? Headers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
