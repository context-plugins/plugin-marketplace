using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Validation;
using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Models;

public record PhotosRequest
{
    /// <summary>
    /// URL of the photo to upload
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// Caption for the photo
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caption")]
    public string? Caption { get; init; }

    /// <summary>
    /// Whether to publish the photo immediately
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published")]
    public bool? Published { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
