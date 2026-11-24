using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;
using GoogleCloudBuild.Models.Enums;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Output only. Installation state of the Connection.
/// </summary>
public record InstallationState1
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
