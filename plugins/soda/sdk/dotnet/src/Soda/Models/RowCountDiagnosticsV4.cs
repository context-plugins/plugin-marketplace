using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record RowCountDiagnosticsV4
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkRowsTested")]
    public int? CheckRowsTested { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetRowsTested")]
    public int? DatasetRowsTested { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
