using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateWhatIfForecastExportRequest
{
    /// <summary>
    /// The name of the what-if forecast to export.
    /// </summary>
    [JsonPropertyName("WhatIfForecastExportName")]
    public required string WhatIfForecastExportName { get; init; }

    /// <summary>
    /// The list of what-if forecast Amazon Resource Names (ARNs) to export.
    /// </summary>
    [JsonPropertyName("WhatIfForecastArns")]
    public required IReadOnlyList<string> WhatIfForecastArns { get; init; }

    [JsonPropertyName("Destination")]
    public required DataDestination Destination { get; init; }

    /// <summary>
    /// A list of tags to apply to the what if forecast.
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
