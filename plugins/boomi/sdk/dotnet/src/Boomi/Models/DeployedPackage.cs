using System;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// A packaged component deployed to a specific runtime environment.
/// </summary>
public record DeployedPackage
{
    /// <summary>
    /// Unique identifier of the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentId")]
    public string? DeploymentId { get; init; }

    /// <summary>
    /// ID of the environment to which the package is deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentId")]
    public string? EnvironmentId { get; init; }

    /// <summary>
    /// ID of the deployed packaged component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("packageId")]
    public string? PackageId { get; init; }

    /// <summary>
    /// ID of the underlying component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("componentId")]
    public string? ComponentId { get; init; }

    /// <summary>
    /// Type of the deployed component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("componentType")]
    public string? ComponentType { get; init; }

    /// <summary>
    /// Timestamp when the package was deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployedDate")]
    public DateTimeOffset? DeployedDate { get; init; }

    /// <summary>
    /// Whether this deployment is currently active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
