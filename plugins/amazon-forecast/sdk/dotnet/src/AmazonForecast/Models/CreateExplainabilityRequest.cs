using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateExplainabilityRequest
{
    /// <summary>
    /// A unique name for the Explainability.
    /// </summary>
    [JsonPropertyName("ExplainabilityName")]
    public required string ExplainabilityName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    [JsonPropertyName("ExplainabilityConfig")]
    public required ExplainabilityConfig ExplainabilityConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSource")]
    public DataSource? DataSource { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Schema")]
    public Schema? Schema { get; init; }

    /// <summary>
    /// Create an Explainability visualization that is viewable within the Amazon Web Services console.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EnableVisualization")]
    public bool? EnableVisualization { get; init; }

    /// <summary>
    /// If TimePointGranularity is set to SPECIFIC, define the first point for the Explainability. Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartDateTime")]
    public string? StartDateTime { get; init; }

    /// <summary>
    /// If TimePointGranularity is set to SPECIFIC, define the last time point for the Explainability. Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndDateTime")]
    public string? EndDateTime { get; init; }

    /// <summary>
    /// Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags: For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across ot
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
