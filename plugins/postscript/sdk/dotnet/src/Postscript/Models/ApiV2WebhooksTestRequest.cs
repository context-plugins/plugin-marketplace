using System.Text.Json.Serialization;
using Postscript.Core.Models;
using Postscript.Models.Enums;

namespace Postscript.Models;

public record ApiV2WebhooksTestRequest
{
    /// <summary>
    /// Webhook subscription event type.
    /// </summary>
    [JsonPropertyName("event")]
    public Event2 Event { get; init; } = Event2.ShopTest;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
