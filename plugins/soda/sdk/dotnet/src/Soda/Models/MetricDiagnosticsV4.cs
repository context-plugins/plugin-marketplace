using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record MetricDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetRowsTested")]
    public int? DatasetRowsTested { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
