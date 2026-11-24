using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DeleteProjectPolicyRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project that the project policy you want to delete is attached to.
    /// </summary>
    [JsonPropertyName("ProjectArn")]
    public required string ProjectArn { get; init; }

    /// <summary>
    /// The name of the policy that you want to delete.
    /// </summary>
    [JsonPropertyName("PolicyName")]
    public required string PolicyName { get; init; }

    /// <summary>
    /// The ID of the project policy revision that you want to delete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
