using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record RotateWebhookSecretResponse
{
    /// <summary>
    /// The newly minted org-scoped signing secret. Returned exactly once — store it now; subsequent reads will not return it.
    /// </summary>
    [JsonPropertyName("signingSecret")]
    public required string SigningSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
