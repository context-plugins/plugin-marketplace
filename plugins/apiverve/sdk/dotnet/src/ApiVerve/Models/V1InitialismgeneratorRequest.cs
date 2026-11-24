using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1InitialismgeneratorRequest
{
    /// <summary>
    /// Phrase to convert to initialism (max 500 characters)
    /// </summary>
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    /// <summary>
    /// Exclude common words like 'the', 'of', 'and'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCommonWords")]
    public bool? ExcludeCommonWords { get; init; }

    /// <summary>
    /// Return the initialism in uppercase
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uppercase")]
    public bool? Uppercase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
