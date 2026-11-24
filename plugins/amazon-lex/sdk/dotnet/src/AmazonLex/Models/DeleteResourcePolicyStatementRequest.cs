using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteResourcePolicyStatementRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The name of the statement (SID) to delete from the policy.
    /// </summary>
    [JsonPropertyName("statementId")]
    public required string StatementId { get; init; }

    /// <summary>
    /// The identifier of the revision of the policy to delete the statement from. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex removes the current contents of the statement.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedRevisionId")]
    public string? ExpectedRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
