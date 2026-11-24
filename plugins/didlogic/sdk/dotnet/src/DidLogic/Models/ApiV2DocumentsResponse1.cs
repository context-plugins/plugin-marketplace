using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2DocumentsResponse1
{
    /// <summary>
    /// Success message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Created document ID
    /// </summary>
    [JsonPropertyName("document_id")]
    public required int DocumentId { get; init; }

    /// <summary>
    /// Created document details
    /// </summary>
    [JsonPropertyName("document")]
    public required Document1 Document { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
