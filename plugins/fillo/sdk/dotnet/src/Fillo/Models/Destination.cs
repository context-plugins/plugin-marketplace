using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record Destination
{
    /// <summary>
    /// <c>webhook:&lt;id&gt;</c> or <c>integration:&lt;id&gt;</c> — the value the retry endpoint accepts as destinationKey.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// How to name this destination: the provider for an integration, and for a webhook the connector that created it (“Zapier”, “n8n”) or its host plus a short fingerprint of the path. The full URL is never returned here.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("detail")]
    public required string? Detail { get; init; }

    [JsonPropertyName("delivered")]
    public required int Delivered { get; init; }

    [JsonPropertyName("pending")]
    public required int Pending { get; init; }

    [JsonPropertyName("failed")]
    public required int Failed { get; init; }

    [JsonPropertyName("nextRetryAt")]
    public required int? NextRetryAt { get; init; }

    [JsonPropertyName("lastDeliveredAt")]
    public required int? LastDeliveredAt { get; init; }

    [JsonPropertyName("failingSince")]
    public required int? FailingSince { get; init; }

    [JsonPropertyName("lastError")]
    public required string? LastError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
