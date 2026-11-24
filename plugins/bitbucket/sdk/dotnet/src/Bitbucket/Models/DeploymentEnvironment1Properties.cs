using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

/// <summary>
/// A deployment environment.
/// </summary>
public record DeploymentEnvironment1Properties
{
    /// <summary>
    /// The UUID identifying the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// The name of the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
