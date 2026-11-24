using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record CreateResourcePolicyStatementRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The name of the statement. The ID is the same as the Sid IAM property. The statement name must be unique within the policy. For more information, see IAM JSON policy elements: Sid.
    /// </summary>
    [JsonPropertyName("statementId")]
    public required string StatementId { get; init; }

    /// <summary>
    /// Determines whether the statement allows or denies access to the resource.
    /// </summary>
    [JsonPropertyName("effect")]
    public required Effect Effect { get; init; }

    /// <summary>
    /// An IAM principal, such as an IAM user, IAM role, or Amazon Web Services services that is allowed or denied access to a resource. For more information, see Amazon Web Services JSON policy elements: Principal.
    /// </summary>
    [JsonPropertyName("principal")]
    public required IReadOnlyList<Principal> Principal { get; init; }

    /// <summary>
    /// The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see Actions, resources, and condition keys for Amazon Lex V2.
    /// </summary>
    [JsonPropertyName("action")]
    public required IReadOnlyList<string> Action { get; init; }

    /// <summary>
    /// Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key. For more information, see IAM JSON policy elements: Condition .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition")]
    public IReadOnlyDictionary<string, string>? Condition { get; init; }

    /// <summary>
    /// The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedRevisionId")]
    public string? ExpectedRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
