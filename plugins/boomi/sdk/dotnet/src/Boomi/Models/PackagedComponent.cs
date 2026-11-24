using System;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// A versioned, deployable package of a Boomi component.
/// </summary>
public record PackagedComponent
{
    /// <summary>
    /// Unique identifier of the packaged component.
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
    /// Version of the component included in this package.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("componentVersion")]
    public string? ComponentVersion { get; init; }

    /// <summary>
    /// Type of the packaged component (process, connector, etc.).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("componentType")]
    public string? ComponentType { get; init; }

    /// <summary>
    /// Version label for this package.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("packageVersion")]
    public string? PackageVersion { get; init; }

    /// <summary>
    /// Timestamp when the package was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdDate")]
    public DateTimeOffset? CreatedDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
