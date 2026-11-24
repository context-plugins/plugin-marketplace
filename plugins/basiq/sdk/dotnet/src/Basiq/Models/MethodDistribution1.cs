using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record MethodDistribution1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CDR")]
    public StatusDistribution? Cdr { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CSV")]
    public StatusDistribution? Csv { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PDF")]
    public StatusDistribution? Pdf { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WEB")]
    public StatusDistribution? Web { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
