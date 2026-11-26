using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

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
