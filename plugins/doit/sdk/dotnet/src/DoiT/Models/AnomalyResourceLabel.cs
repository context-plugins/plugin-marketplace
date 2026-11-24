using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A single label (a.k.a. cost-allocation tag) on the resource, paired with the resource's cost tagged with this key/value pair.
/// </summary>
public record AnomalyResourceLabel
{
    /// <summary>
    /// The label/tag key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// The label/tag value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    /// <summary>
    /// The resource's cost tagged with this key/value pair; typically equal to the resource's cost, since labels/tags usually cover all of its spend.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost")]
    public double? Cost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
