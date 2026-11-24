using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record CreateEnvironmentRequest
{
    /// <summary>
    /// Type of environment to create
    /// </summary>
    [JsonPropertyName("environmentType")]
    public required EnvironmentType EnvironmentType { get; init; }

    /// <summary>
    /// Country to create the environment within
    /// </summary>
    [JsonPropertyName("countryCode")]
    public required string CountryCode { get; init; }

    /// <summary>
    /// Logical ring group (only Sandbox may be created in Preview ring)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ringName")]
    public string? RingName { get; init; }

    /// <summary>
    /// Application version (e.g., 26.0.0.0)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationVersion")]
    public string? ApplicationVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
