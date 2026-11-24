using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record Result
{
    [JsonPropertyName("dataSeries")]
    public required IReadOnlyList<DataPoint> DataSeries { get; init; }

    [JsonPropertyName("variations")]
    public required IReadOnlyList<VariationResult> Variations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
