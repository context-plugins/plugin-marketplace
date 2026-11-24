using System.Text.Json.Serialization;
using Postscript.Core.Models;
using Postscript.Models.Enums;

namespace Postscript.Models;

public record ApiV2WebhooksRequest
{
    /// <summary>
    /// Destination URL for webhook deliveries (HTTPS only).
    /// </summary>
    [JsonPropertyName("callback_url")]
    public required string CallbackUrl { get; init; }

    /// <summary>
    /// Webhook subscription event type.
    /// </summary>
    [JsonPropertyName("event")]
    public Event Event { get; init; } = Event.ShopTest;

    /// <summary>
    /// Custom key:value pairs to be sent as headers in every callback.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public object? Headers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
