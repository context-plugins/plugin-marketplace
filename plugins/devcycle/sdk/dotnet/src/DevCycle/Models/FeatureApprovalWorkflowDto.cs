using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureApprovalWorkflowDto
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("allowPublisherBypass")]
    public required bool AllowPublisherBypass { get; init; }

    [JsonPropertyName("defaultReviewers")]
    public required IReadOnlyList<string> DefaultReviewers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
