using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apibara.Core.Models;
using Apibara.Core.Validation.Attributes;

namespace Apibara.Models;

public record MediaInfo
{
    /// <summary>
    /// Total source image count represented by the vehicle media set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbs_count")]
    [Minimum(0)]
    public int? ThumbsCount { get; init; }

    /// <summary>
    /// True when IAAI Link360 or Copart copartMedia.views_360 source data is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_360")]
    public bool? Has360 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("photos")]
    public IReadOnlyList<string>? Photos { get; init; }

    /// <summary>
    /// Total image count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images_count")]
    [Minimum(0)]
    public int? ImagesCount { get; init; }

    /// <summary>
    /// Number of media items returned in this response. Summary view may return fewer items than images_count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items_count")]
    [Minimum(0)]
    public int? ItemsCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_video")]
    public bool? HasVideo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<object>? Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
