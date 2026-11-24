using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record PipelineContinueRequest
{
    /// <summary>
    /// A pipeline continuation key
    /// </summary>
    [JsonPropertyName("continuation-key")]
    public required string ContinuationKey { get; init; }

    /// <summary>
    /// A configuration string for the pipeline
    /// </summary>
    [JsonPropertyName("configuration")]
    public required string Configuration { get; init; }

    /// <summary>
    /// Pipeline parameters as key-value pairs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameters")]
    public object? Parameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
