using System.Text.Json.Serialization;
using Boomi.Core.Models;
using Boomi.Models.Enums;

namespace Boomi.Models;

/// <summary>
/// Input for creating a runtime environment.
/// </summary>
public record EnvironmentInput
{
    /// <summary>
    /// Display name for the environment.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Whether this is a production or test environment.
    /// </summary>
    [JsonPropertyName("classification")]
    public required Classification1 Classification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
