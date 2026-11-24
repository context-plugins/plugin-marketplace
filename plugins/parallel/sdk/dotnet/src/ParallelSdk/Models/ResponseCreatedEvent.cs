using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

public record ResponseCreatedEvent
{
    /// <summary>
    /// A response from the <c>parallel</c> model. A completed response contains a
    /// single assistant message whose text is annotated with URL citations
    /// grounding the answer.
    /// </summary>
    [JsonPropertyName("response")]
    public required ResponseModel Response { get; init; }

    [JsonPropertyName("sequence_number")]
    public required int SequenceNumber { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "response.created";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
