using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DeleteResourcePolicyRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The revision ID of the policy to delete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
