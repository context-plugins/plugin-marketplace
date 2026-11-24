using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record CategoryReportingReportsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anzsic")]
    public AnzsicReportingReportsApi? Anzsic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
