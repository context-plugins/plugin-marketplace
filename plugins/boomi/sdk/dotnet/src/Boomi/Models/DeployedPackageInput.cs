using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Input for deploying a packaged component to an environment.
/// </summary>
public record DeployedPackageInput
{
    /// <summary>
    /// ID of the target environment.
    /// </summary>
    [JsonPropertyName("environmentId")]
    public required string EnvironmentId { get; init; }

    /// <summary>
    /// ID of the packaged component to deploy.
    /// </summary>
    [JsonPropertyName("packageId")]
    public required string PackageId { get; init; }

    /// <summary>
    /// Optional deployment notes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public string? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
