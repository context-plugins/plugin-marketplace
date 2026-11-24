using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record WebhookListResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<Webhook> Data { get; init; }

    /// <summary>
    /// True when the organization has generated a webhook signing secret at least once.
    /// </summary>
    [JsonPropertyName("signingSecretConfigured")]
    public required bool SigningSecretConfigured { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
