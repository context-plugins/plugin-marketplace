using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// An AdaptiveMt sentence entry.
/// </summary>
public record AdaptiveMtSentence
{
    /// <summary>
    /// Output only. Timestamp when this sentence was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. Timestamp when this sentence was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The source sentence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceSentence")]
    public string? SourceSentence { get; init; }

    /// <summary>
    /// Required. The target sentence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetSentence")]
    public string? TargetSentence { get; init; }

    /// <summary>
    /// Identifier. The resource name of the file, in form of <c>projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}/adaptiveMtSentences/{sentence}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
