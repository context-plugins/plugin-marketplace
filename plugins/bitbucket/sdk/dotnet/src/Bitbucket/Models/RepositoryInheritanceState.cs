using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

/// <summary>
/// A json object representing the repository's inheritance state values
/// </summary>
public record RepositoryInheritanceState
{
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("override_settings")]
    public object? OverrideSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
