using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Input for creating a packaged component.
/// </summary>
public record PackagedComponentInput
{
    /// <summary>
    /// ID of the component to package.
    /// </summary>
    [JsonPropertyName("componentId")]
    public required string ComponentId { get; init; }

    /// <summary>
    /// Version of the component to include in the package.
    /// </summary>
    [JsonPropertyName("componentVersion")]
    public required string ComponentVersion { get; init; }

    /// <summary>
    /// Optional version label for the package.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("packageVersion")]
    public string? PackageVersion { get; init; }

    /// <summary>
    /// Optional notes about this package version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public string? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
