using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;
using GoogleCloudBuild.Models.Enums;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections.
/// </summary>
public record InstallationState
{
    /// <summary>
    /// Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Output only. Link to follow for next action. Empty string if the installation is already complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionUri")]
    public string? ActionUri { get; init; }

    /// <summary>
    /// Output only. Current step of the installation process.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stage")]
    public Stage? Stage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
