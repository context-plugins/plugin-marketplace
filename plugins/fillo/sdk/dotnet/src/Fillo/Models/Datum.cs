using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Datum
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Answers typed so far, keyed by field id.
    /// </summary>
    [JsonPropertyName("data")]
    public required object Data { get; init; }

    /// <summary>
    /// Zero-based page reached.
    /// </summary>
    [JsonPropertyName("page")]
    public required int Page { get; init; }

    [JsonPropertyName("updatedAt")]
    public required int UpdatedAt { get; init; }

    [JsonPropertyName("expiresAt")]
    public required int ExpiresAt { get; init; }

    /// <summary>
    /// externalId, email, and name when identify() named the person.
    /// </summary>
    [JsonPropertyName("respondent")]
    public required object? Respondent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
