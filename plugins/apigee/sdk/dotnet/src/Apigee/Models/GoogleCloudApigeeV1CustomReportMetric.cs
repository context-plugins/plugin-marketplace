using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum
/// </summary>
public record GoogleCloudApigeeV1CustomReportMetric
{
    /// <summary>
    /// aggregate function
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("function")]
    public string? Function { get; init; }

    /// <summary>
    /// name of the metric
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
