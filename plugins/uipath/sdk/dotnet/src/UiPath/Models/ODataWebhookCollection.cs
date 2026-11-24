using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// OData collection response containing webhooks
/// </summary>
public record ODataWebhookCollection
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public IReadOnlyList<Webhook>? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
