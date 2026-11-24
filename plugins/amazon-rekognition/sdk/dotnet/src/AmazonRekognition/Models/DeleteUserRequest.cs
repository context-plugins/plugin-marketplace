using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteUserRequest
{
    /// <summary>
    /// The ID of an existing collection from which the UserID needs to be deleted.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// ID for the UserID to be deleted.
    /// </summary>
    [JsonPropertyName("UserId")]
    public required string UserId { get; init; }

    /// <summary>
    /// Idempotent token used to identify the request to DeleteUser. If you use the same token with multiple DeleteUser requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
