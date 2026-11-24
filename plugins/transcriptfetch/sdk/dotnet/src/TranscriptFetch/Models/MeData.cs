using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

public record MeData
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "me";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_id")]
    public string? UserId { get; init; }

    /// <summary>
    /// Remaining balance, or null for unlimited (admin) accounts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits")]
    public int? Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
