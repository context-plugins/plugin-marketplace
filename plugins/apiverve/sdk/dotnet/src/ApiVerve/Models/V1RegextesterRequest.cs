using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1RegextesterRequest
{
    /// <summary>
    /// The regular expression pattern to test. Maximum 500 characters
    /// </summary>
    [JsonPropertyName("pattern")]
    public required string Pattern { get; init; }

    /// <summary>
    /// The text to test the pattern against. Maximum 20000 characters
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Regex flags: g (global), i (case insensitive), m (multiline), s (dotall), u (unicode), y (sticky)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flags")]
    public string? Flags { get; init; }

    /// <summary>
    /// Operation type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("test_type")]
    public string? TestType { get; init; }

    /// <summary>
    /// Replacement text for 'replace' operation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replacement")]
    public string? Replacement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
