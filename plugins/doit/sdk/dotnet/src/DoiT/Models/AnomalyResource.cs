using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Resource-specific contribution to an anomaly.
/// </summary>
public record AnomalyResource
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cost")]
    public double? Cost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceId")]
    public string? ResourceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skuDescription")]
    public string? SkuDescription { get; init; }

    /// <summary>
    /// For anomalies related to AWS S3
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operation")]
    public string? Operation { get; init; }

    /// <summary>
    /// Labels (also known as cost-allocation tags) present on this resource during the anomaly; each entry reports the label's key, its value, and the resource's cost tagged with that key/value pair.
    /// Cloud providers use different names for the same concept; GCP uses "labels", AWS uses "cost-allocation tags", and Azure uses "tags". We refer to all of these as labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<AnomalyResourceLabel>? Labels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
