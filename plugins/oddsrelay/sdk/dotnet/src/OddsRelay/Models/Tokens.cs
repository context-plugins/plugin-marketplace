using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

/// <summary>
/// <c>remaining</c> and <c>limit</c> read <c>unlimited</c> on an unlimited account; null while the balance is unknown.
/// </summary>
public record Tokens
{
    [JsonPropertyName("used")]
    public required int? Used { get; init; }

    [JsonPropertyName("remaining")]
    public required Remaining? Remaining { get; init; }

    [JsonPropertyName("limit")]
    public required Limit? Limit { get; init; }

    /// <summary>
    /// When the pool resets; on a trial, the trial's end when that comes first.
    /// </summary>
    [JsonPropertyName("resets_at")]
    public required string? ResetsAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
