using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DisassociateFacesRequest
{
    /// <summary>
    /// The ID of an existing collection containing the UserID.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// ID for the existing UserID.
    /// </summary>
    [JsonPropertyName("UserId")]
    public required string UserId { get; init; }

    /// <summary>
    /// Idempotent token used to identify the request to DisassociateFaces. If you use the same token with multiple DisassociateFaces requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// An array of face IDs to disassociate from the UserID.
    /// </summary>
    [JsonPropertyName("FaceIds")]
    public required IReadOnlyList<string> FaceIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
