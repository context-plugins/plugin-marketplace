using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record Delivery
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("destinationKey")]
    public required string DestinationKey { get; init; }

    [JsonPropertyName("kind")]
    public required Kind Kind { get; init; }

    /// <summary>
    /// The same name as the matching destination's label — never a full webhook URL.
    /// </summary>
    [JsonPropertyName("destinationLabel")]
    public required string DestinationLabel { get; init; }

    [JsonPropertyName("destinationDetail")]
    public required string? DestinationDetail { get; init; }

    [JsonPropertyName("event")]
    public required Event Event { get; init; }

    [JsonPropertyName("state")]
    public required State State { get; init; }

    [JsonPropertyName("attempts")]
    public required int Attempts { get; init; }

    [JsonPropertyName("httpStatus")]
    public required int? HttpStatus { get; init; }

    [JsonPropertyName("lastError")]
    public required string? LastError { get; init; }

    [JsonPropertyName("responseId")]
    public required string? ResponseId { get; init; }

    [JsonPropertyName("nextAttemptAt")]
    public required int? NextAttemptAt { get; init; }

    [JsonPropertyName("queuedAt")]
    public required int QueuedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required int UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
