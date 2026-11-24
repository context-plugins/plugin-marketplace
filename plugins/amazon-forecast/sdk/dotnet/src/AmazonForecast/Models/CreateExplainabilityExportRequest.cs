using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateExplainabilityExportRequest
{
    /// <summary>
    /// A unique name for the Explainability export.
    /// </summary>
    [JsonPropertyName("ExplainabilityExportName")]
    public required string ExplainabilityExportName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Explainability to export.
    /// </summary>
    [JsonPropertyName("ExplainabilityArn")]
    public required string ExplainabilityArn { get; init; }

    [JsonPropertyName("Destination")]
    public required DataDestination Destination { get; init; }

    /// <summary>
    /// Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags: For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across ot
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The format of the exported data, CSV or PARQUET.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Format")]
    public string? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
