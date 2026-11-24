using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Label metadata.
/// </summary>
public record LabelListItem
{
    /// <summary>
    /// The unique identifier of the label.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the label.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The color of the label.
    /// </summary>
    [JsonPropertyName("color")]
    public required Color Color { get; init; }

    /// <summary>
    /// The type of the label (custom or preset).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeDoiTLabelsApi? Type { get; init; }

    /// <summary>
    /// The time when the label was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// The time when the label was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public DateTimeOffset? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
