using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ProtectedProjectSettingsDto
{
    [JsonPropertyName("featureApprovalWorkflow")]
    public required FeatureApprovalWorkflowDto FeatureApprovalWorkflow { get; init; }

    [JsonPropertyName("staleness")]
    public required StalenessSettingsDto Staleness { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
