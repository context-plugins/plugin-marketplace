using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response containing a paginated list of webhooks.
/// </summary>
public record WebhooksListResponse
{
    [JsonPropertyName("webhooks")]
    public required PaginatedResponseWebhook Webhooks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
