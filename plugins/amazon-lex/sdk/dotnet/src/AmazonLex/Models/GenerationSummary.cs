using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GenerationSummary
{
    /// <summary>
    /// The unique identifier of the generation request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generationId")]
    public string? GenerationId { get; init; }

    /// <summary>
    /// The status of the generation request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generationStatus")]
    public GenerationStatus? GenerationStatus { get; init; }

    /// <summary>
    /// The date and time at which the generation request was made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The date and time at which the generation request was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
