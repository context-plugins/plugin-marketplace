using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record TaskStartedEventDetails
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
