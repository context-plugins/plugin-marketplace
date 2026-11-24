using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record ApplicationsEnvironmentsRenameRequest
{
    /// <summary>
    /// The new name for the environment
    /// </summary>
    [JsonPropertyName("NewEnvironmentName")]
    public required string NewEnvironmentName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
