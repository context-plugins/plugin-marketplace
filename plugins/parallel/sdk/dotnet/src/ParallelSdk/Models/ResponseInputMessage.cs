using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// A single input message for the Responses API.
/// <para>
/// <c>content</c> accepts either a bare string (<c>"hi"</c>) or the canonical OpenAI
/// list-of-parts (<c>[{"text": "hi", "type": "input_text"}]</c>).
/// </para>
/// </summary>
public record ResponseInputMessage
{
    /// <summary>
    /// The role of the message author.
    /// </summary>
    [JsonPropertyName("role")]
    public required RoleParallelAiResponsesApi Role { get; init; }

    /// <summary>
    /// Text content of the message. Either a string or a list of content parts (<c>{text, type}</c> objects) for OpenAI SDK clients.
    /// </summary>
    [JsonPropertyName("content")]
    public required ContentParallelAiResponsesApi Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
