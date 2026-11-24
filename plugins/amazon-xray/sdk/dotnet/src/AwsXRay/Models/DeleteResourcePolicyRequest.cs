using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record DeleteResourcePolicyRequest
{
    /// <summary>
    /// The name of the resource policy to delete.
    /// </summary>
    [JsonPropertyName("PolicyName")]
    public required string PolicyName { get; init; }

    /// <summary>
    /// Specifies a specific policy revision to delete. Provide a PolicyRevisionId to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an InvalidPolicyRevisionIdException exception is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
