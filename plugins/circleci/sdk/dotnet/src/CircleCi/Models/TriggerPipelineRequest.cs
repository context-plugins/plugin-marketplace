using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record TriggerPipelineRequest
{
    /// <summary>
    /// The branch to build
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch")]
    public string? Branch { get; init; }

    /// <summary>
    /// The tag to build
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tag")]
    public string? Tag { get; init; }

    /// <summary>
    /// Pipeline parameters as key-value pairs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameters")]
    public object? Parameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
