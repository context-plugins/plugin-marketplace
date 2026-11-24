using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ListFlywheelIterationHistoryResponse
{
    /// <summary>
    /// List of flywheel iteration properties
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelIterationPropertiesList")]
    public IReadOnlyList<FlywheelIterationProperties>? FlywheelIterationPropertiesList { get; init; }

    /// <summary>
    /// Next token
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
