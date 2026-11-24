using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record AssociateFacesRequest
{
    /// <summary>
    /// The ID of an existing collection containing the UserID.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// The ID for the existing UserID.
    /// </summary>
    [JsonPropertyName("UserId")]
    public required string UserId { get; init; }

    /// <summary>
    /// An array of FaceIDs to associate with the UserID.
    /// </summary>
    [JsonPropertyName("FaceIds")]
    public required IReadOnlyList<string> FaceIds { get; init; }

    /// <summary>
    /// An optional value specifying the minimum confidence in the UserID match to return. The default value is 75.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserMatchThreshold")]
    public double? UserMatchThreshold { get; init; }

    /// <summary>
    /// Idempotent token used to identify the request to AssociateFaces. If you use the same token with multiple AssociateFaces requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
