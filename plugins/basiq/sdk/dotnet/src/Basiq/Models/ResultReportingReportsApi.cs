using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.AnyOf;

namespace Basiq.Models;

public record ResultReportingReportsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public Value1? Value { get; init; }

    /// <summary>
    /// Format of the metric value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
