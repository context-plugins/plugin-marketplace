using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record PublicApiRootCauseAnalysisDto
{
    [JsonPropertyName("confidence")]
    public required RcaConfidenceDto Confidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationSeconds")]
    public int? DurationSeconds { get; init; }

    [JsonPropertyName("generatedAt")]
    public required DateTimeOffset GeneratedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("investigation")]
    public IReadOnlyList<PublicApiRcaInvestigationStepDto>? Investigation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lineage")]
    public PublicApiRcaLineageDto? Lineage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remediation")]
    public IReadOnlyList<PublicApiRcaRemediationItemDto>? Remediation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rootCauseResource")]
    public PublicApiRcaResourceRefDto? RootCauseResource { get; init; }

    [JsonPropertyName("status")]
    public required RcaReportStatusDto Status { get; init; }

    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
