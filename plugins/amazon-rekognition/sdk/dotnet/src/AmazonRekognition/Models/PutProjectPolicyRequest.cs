using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record PutProjectPolicyRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the project that the project policy is attached to.
    /// </summary>
    [JsonPropertyName("ProjectArn")]
    public required string ProjectArn { get; init; }

    /// <summary>
    /// A name for the policy.
    /// </summary>
    [JsonPropertyName("PolicyName")]
    public required string PolicyName { get; init; }

    /// <summary>
    /// The revision ID for the Project Policy. Each time you modify a policy, Amazon Rekognition Custom Labels generates and assigns a new PolicyRevisionId and then deletes the previous version of the policy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    /// <summary>
    /// A resource policy to add to the model. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see IAM JSON policy reference.
    /// </summary>
    [JsonPropertyName("PolicyDocument")]
    public required string PolicyDocument { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
