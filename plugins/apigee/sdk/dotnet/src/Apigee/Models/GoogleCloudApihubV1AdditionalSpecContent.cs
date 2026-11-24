using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The additional spec content for the spec. This contains the metadata and the last update time for the additional spec content.
/// </summary>
public record GoogleCloudApihubV1AdditionalSpecContent
{
    /// <summary>
    /// Optional. The labels of the spec content e.g. specboost addon version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. The additional spec contents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specContents")]
    public GoogleCloudApihubV1SpecContents1? SpecContents { get; init; }

    /// <summary>
    /// Required. The type of the spec content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specContentType")]
    public SpecContentType? SpecContentType { get; init; }

    /// <summary>
    /// Output only. The time at which the spec content was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The time at which the spec content was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
