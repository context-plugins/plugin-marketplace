using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CreateUserRequest
{
    /// <summary>
    /// The ID of an existing collection to which the new UserID needs to be created.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// ID for the UserID to be created. This ID needs to be unique within the collection.
    /// </summary>
    [JsonPropertyName("UserId")]
    public required string UserId { get; init; }

    /// <summary>
    /// Idempotent token used to identify the request to CreateUser. If you use the same token with multiple CreateUser requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
