using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response for webhook creation, includes the secret (only returned once).
/// </summary>
public record WebhookCreateResponse
{
    /// <summary>
    /// Webhook response that includes the secret, only returned on creation.
    /// </summary>
    [JsonPropertyName("webhook")]
    public required WebhookWithSecret Webhook { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
