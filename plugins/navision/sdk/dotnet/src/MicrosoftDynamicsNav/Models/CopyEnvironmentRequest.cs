using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record CopyEnvironmentRequest
{
    /// <summary>
    /// Name for the new environment
    /// </summary>
    [JsonPropertyName("environmentName")]
    public required string EnvironmentName { get; init; }

    /// <summary>
    /// Type of environment to create
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1BusinessCentralAdministrationCenterEnvironmentsApi Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
