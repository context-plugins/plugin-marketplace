using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Models;

/// <summary>
/// The type of event. One and only one of the fields in this input type must be provided.
/// </summary>
public record CompassEventInputDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployment")]
    public CompassCreateDeploymentEventInputDto? Deployment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build")]
    public CompassCreateBuildEventInputDto? Build { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incident")]
    public CompassCreateIncidentEventInputDto? Incident { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flag")]
    public CompassCreateFlagEventInputDto? Flag { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alert")]
    public CompassCreateAlertEventInputDto? Alert { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifecycle")]
    public CompassCreateLifecycleEventInputDto? Lifecycle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public CompassCreateCustomEventInputDto? Custom { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push")]
    public CompassCreatePushEventInputDto? Push { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pullRequest")]
    public CompassCreatePullRequestEventInputDto? PullRequest { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vulnerability")]
    public CompassCreateVulnerabilityEventInputDto? Vulnerability { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
