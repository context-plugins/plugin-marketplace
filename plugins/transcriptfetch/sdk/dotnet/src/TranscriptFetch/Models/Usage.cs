using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

public record Usage
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_spent")]
    public int? CreditsSpent { get; init; }

    /// <summary>
    /// Remaining balance, or null for unlimited (admin) accounts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance")]
    public int? Balance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytes")]
    public int? Bytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
