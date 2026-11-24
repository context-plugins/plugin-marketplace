using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record Area
{
    /// <summary>
    /// Opaque token. Order with it in the same session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("areaId")]
    public string? AreaId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("areaName")]
    public string? AreaName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("areaCode")]
    public string? AreaCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stock")]
    public int? Stock { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderable")]
    public bool? Orderable { get; init; }

    /// <summary>
    /// Your monthly price per number in this area, at your contract rates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estMonthlyUsd")]
    public double? EstMonthlyUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
