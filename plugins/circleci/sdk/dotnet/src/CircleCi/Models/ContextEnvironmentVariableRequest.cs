using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record ContextEnvironmentVariableRequest
{
    /// <summary>
    /// The value of the environment variable
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
