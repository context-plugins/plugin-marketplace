using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Results returned when running a report; includes schema and rows.
/// </summary>
public record RunReportResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public ResultDoiTReportsApi? Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
