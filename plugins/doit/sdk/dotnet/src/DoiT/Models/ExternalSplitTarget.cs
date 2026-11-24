using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Target and value of a split definition.
/// </summary>
public record ExternalSplitTarget
{
    /// <summary>
    /// ID of the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Type of the target.
    /// If split type is "attribution_group", then target type must be "attribution".
    /// Otherwise split types and target types must be the same.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type4DoiTReportsApi? Type { get; init; }

    /// <summary>
    /// Percent of the target, represented in float format. E.g. 30% is 0.3. Required only if the Split Mode is custom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
