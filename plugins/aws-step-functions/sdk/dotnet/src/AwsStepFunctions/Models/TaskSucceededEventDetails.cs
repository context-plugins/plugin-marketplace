using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record TaskSucceededEventDetails
{
    /// <summary>
    /// The service name of the resource in a task state.
    /// </summary>
    [JsonPropertyName("resourceType")]
    public required string ResourceType { get; init; }

    /// <summary>
    /// The action of the resource called by a task state.
    /// </summary>
    [JsonPropertyName("resource")]
    public required string Resource { get; init; }

    /// <summary>
    /// The full JSON response from a resource when a task has succeeded. This response becomes the output of the related task. Length constraints apply to the payload size, and are expressed as bytes in UTF-8 encoding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public string? Output { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputDetails")]
    public HistoryEventExecutionDataDetails? OutputDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
