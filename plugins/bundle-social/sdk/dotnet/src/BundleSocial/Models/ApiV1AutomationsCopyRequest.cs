using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1AutomationsCopyRequest
{
    [JsonPropertyName("sourceTeamId")]
    public required string SourceTeamId { get; init; }

    [JsonPropertyName("targetTeamId")]
    public required string TargetTeamId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowId")]
    public string? FlowId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
