using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateResourcePolicyRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see IAM JSON policy reference . If the policy isn't valid, Amazon Lex returns a validation exception.
    /// </summary>
    [JsonPropertyName("policy")]
    public required string Policy { get; init; }

    /// <summary>
    /// The identifier of the revision of the policy to update. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedRevisionId")]
    public string? ExpectedRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
