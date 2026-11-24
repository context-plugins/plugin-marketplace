using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV2DocumentsResponse3
{
    /// <summary>
    /// Success message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("document_id")]
    public required int DocumentId { get; init; }

    /// <summary>
    /// Updated document details
    /// </summary>
    [JsonPropertyName("document")]
    public required Document4 Document { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
