using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response for webhook deletion.
/// </summary>
public record WebhookDeleteResponse
{
    [JsonPropertyName("webhook_id")]
    public required string WebhookId { get; init; }

    [JsonPropertyName("deleted")]
    public required bool Deleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
