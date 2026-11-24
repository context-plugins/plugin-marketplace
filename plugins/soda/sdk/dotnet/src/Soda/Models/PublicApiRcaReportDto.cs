using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiRcaReportDto
{
    [JsonPropertyName("agent")]
    public required PublicApiRcaAgentDto Agent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("impactAssessment")]
    public PublicApiImpactAssessmentDto? ImpactAssessment { get; init; }

    [JsonPropertyName("rootCauseAnalysis")]
    public required PublicApiRootCauseAnalysisDto RootCauseAnalysis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
