using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UtteranceData
{
    /// <summary>
    /// The text that was entered by the user or the text representation of an audio clip.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceString")]
    public string? UtteranceString { get; init; }

    /// <summary>
    /// The number of times that the utterance was processed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    /// <summary>
    /// The total number of individuals that used the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("distinctUsers")]
    public int? DistinctUsers { get; init; }

    /// <summary>
    /// The date that the utterance was first recorded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstUtteredDate")]
    public DateTimeOffset? FirstUtteredDate { get; init; }

    /// <summary>
    /// The date that the utterance was last recorded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUtteredDate")]
    public DateTimeOffset? LastUtteredDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
