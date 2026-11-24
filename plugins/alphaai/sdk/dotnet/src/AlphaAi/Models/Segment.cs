using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record Segment
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The segment's figure exactly as the filing printed it. A segment table names its unit in the header far more often than in the cell, so use the three companions below to compute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public string? Revenue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yoy_change")]
    public string? YoyChange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qoq_change")]
    public string? QoqChange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("driver")]
    public string? Driver { get; init; }

    /// <summary>
    /// <c>revenue</c> as a number at the face scale it was printed. Null when the field carries no figure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numeric")]
    public double? Numeric { get; init; }

    /// <summary>
    /// ISO-style currency code, <c>pct</c> for a percentage, null when the cell prints no currency (or holds a volume, such as units delivered).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public string? Unit { get; init; }

    /// <summary>
    /// The multiplier <c>numeric</c> is expressed in, by the same rules as a <c>key_metrics</c> row. A bare segment figure takes the table header's scale only when the segments then fit under the read's own revenue line; otherwise null. Added 2026-10-01 to every stored read.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scale")]
    public Scale1? Scale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
