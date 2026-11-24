using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Validation;
using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Models;

public record VideosRequest
{
    /// <summary>
    /// URL of the video file to upload
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_url")]
    [Format(FormatKind.Uri)]
    public string? FileUrl { get; init; }

    /// <summary>
    /// Title of the video
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Description of the video
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Whether to publish the video immediately
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published")]
    public bool? Published { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
